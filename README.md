
# WebAR Construction Validation Tool — IFC WebXR Viewer

A React + Three.js + WebXR viewer for IFC building models. Loads GLB files from the IFC pipeline and provides AR placement with storey/category toggles.
[Watch Demo](https://youtu.be/FvGA7irS6nE)

## Quick Start

```bash
# Clone the repository
git clone [https://github.com/your-repo/webar-construction-validation-tool.git](https://github.com/your-repo/webar-construction-validation-tool.git)
cd webar-construction-validation-tool

# Install dependencies
npm install

# Copy GLB files from the IFC pipeline
# (See the ifc-webar-spatial-pipeline README for export instructions)

# Start development server
npm run dev

```

## Prerequisites

| Requirement | Version | Notes |
| --- | --- | --- |
| **Node.js** | 18+ | — |
| **npm** | 9+ | — |
| **Android device** | Chrome 81+ | For WebXR AR features |
| **Desktop** | Chrome/Edge | For local debugging |

## WebXR Browser Support

| Platform | Support | Notes |
| --- | --- | --- |
| **Android (Chrome)** | ✅ Full | Target platform |
| **Android (Edge, Firefox)** | ✅ Supported | Should work out of the box |
| **iOS (Safari)** | ❌ Not supported | Apple does not implement the WebXR API |
| **iOS (Any browser)** | ❌ Not supported | All iOS browsers are forced to use WebKit underneath |
| **Desktop (Chrome/Edge)** | ✅ Yes | Great for local development & emulated testing |

> 💡 **For iOS Users:** The app automatically falls back to a desktop-style 3D viewer utilizing standard OrbitControls when WebXR capabilities are unavailable.
> 💡 **For Android Users:** Go to chrome setting and give permission to the site settings and then try again with the hosted link and it wil work.

---

## How to Use

### 1. Prepare GLB Files

Run your IFC to GLB pipeline to generate the structured asset bundles. Copy the generated outputs directly into your local `public/models/` directory following this precise layout:

```text
public/models/
├── combinedMesh/
│   ├── building_combined.glb
│   └── building_metadata.json
├── GroundFloor/
├── Level_01/
│   ├── Level_01_circulation.glb
│   ├── Level_01_openings.glb
│   ├── Level_01_spaces.json
│   └── Level_01_structure.glb
├── Level_02/
└── ...

```

### 2. Launch the App

```bash
npm run dev

```

* Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) in your target browser or host it via another provider like ngrok or github pages. 
or use the bleow site to try it out:
* AR Demo: https://balav-17.github.io/WebAR_Construction_Validation_Tool/


### 3. Enter AR Mode (Android / Supported Desktop Devices)

* Tap the **"ENTER AR MODE"** button.
* Grant the application required camera permissions.
* Point your camera downward at a flat, stable surface (floor, table, or ground).

### 4. Place the Building

* Wait for the green tracking reticle to lock onto and appear on the scanned surface.
* Tap **"PLACE BUILDING"**. Make sure any storey are selected before proceeding.
* The 3D model will instantly anchor itself to that specific real-world coordinate.
Fell free to use the rotation sliders for desired perspectives.

### 5. Controller Interfaces

| Control Component | Primary Function |
| --- | --- |
| **STORIES (NAV button)** | Opens up a side-drawer panel to toggle floors (GroundFloor, Level_01, etc.) |
| **SYSTEMS (LAYERS button)** | Opens up a side-drawer panel to toggle material categories (Structure, Openings, Circulation, MEP) |
| **SPACES (PLACE button)** | Toggles the custom visual room labels overlay |
| **Scale Slider** | Dynamically resizes the building envelope scale safely between `0.1x` — `2.0x` |
| **Rotation Slider** | Rotates the building model orientation freely (`-180°` to `180°`) |
| **Opacity Slider** | Smoothly adjusts architectural material transparency levels (`0%` — `100%`) |
| **RESET (Top Right)** | Instantly resets the engine camera position, active layer toggles, and UI sliders |

### 6. Toggle Multiple Storeys

* Select **L1** → the base building storey layer pops into view.
* Select **L2** → L2 dynamically mounts and stacks perfectly on top of L1 (aligned via absolute spatial heights).
* Deselect **L2** → L2 unmounts instantly; L1 remains fully visible.
* **"ALL" Button** → Bypasses incremental loading to read a single, combined optimization GLB containing all pre-stacked storeys simultaneously.

---

## Project Structure

```text
webar-construction-validation-tool/
├── public/
│   └── models/                      # GLB files generated from the IFC pipeline
├── src/
│   ├── components/
│   │   ├── ARView.tsx               # Core WebXR XRWebGLLayer + Three.js engine instance
│   │   ├── StoreySelector.tsx       # Sidebar UI for handling active level states
│   │   ├── CategoryToggles.tsx      # Sidebar UI managing active system layers
│   │   ├── SpacesControls.tsx       # UI controller for reticle placement & space labels
│   │   └── HeaderNav.tsx            # Floating top bar containing quick reset actions
│   ├── utils/
│   │   ├── materials.ts             # Direct client-side engine PBR material overrides
│   │   ├── loadStoreyGLBs.ts        # Optimized chunked asset loader utility
│   │   ├── spacesOverlay.ts         # Room metadata annotation projector
│   │   └── storeyElevation.ts       # Floor alignment constraint calculator
│   ├── App.tsx                      # Primary context provider & UI layout layer
│   ├── types.ts                     # Explicit TypeScript interface declarations
│   └── index.css                    # Tailored styling configuration
├── package.json
├── vite.config.ts
└── README.md

```

---

## Troubleshooting

| Common Issue | Troubleshooting Solution |
| --- | --- |
| **WebXR not available** | Make sure you are using a validated Google Chrome browser instance on an Android framework, or utilizing developer-emulated devices on your desktop environment. |
| **Models not loading** | Double-check that your exported GLB meshes are properly placed within the `public/models/{StoreyName}/` sub-folders with matching naming conventions. |
| **Reticle not appearing** | Surface features require light and contrast. Verify that the current workspace is well-lit and that you are scanning a textured surface rather than a smooth, reflective void. |
| **Model floating/lost** | Bring your opacity level back to full. If the bounding box is massive, utilize the scale slider to minimize the bounds to track your asset centerpoint. |
| **iOS shows desktop mode** | This is the default expected fallback behavior. WebXR features are disabled natively on standard iOS Safari engines. |

---

## Building for Production

```bash
npm run build

```

The compiled, highly optimized build output will drop straight into your local `dist/` project folder. This artifact can be safely deployed directly onto any decoupled static hosting tier (such as GitHub Pages, Netlify, Vercel, or AWS S3).

## Related Repository

* [ifc-webar-spatial-pipeline](https://github.com/balaV-17/ifc-webar-spatial-pipeline) — The automated companion IFC-to-GLB optimization pipeline engine.

## License

This project is exclusively for demonstration purposes as part of the BIM-AR Validation Tool academic assignment.

*Created by **Balaji Velu***

```

```