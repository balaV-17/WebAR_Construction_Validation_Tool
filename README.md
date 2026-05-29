```markdown
# WebAR Construction Validation Tool — IFC WebXR Viewer

A React + Three.js + WebXR viewer for IFC building models. Loads GLB files from the IFC pipeline and provides AR placement with storey/category toggles.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-repo/webar-construction-validation-tool.git
cd webar-construction-validation-tool

# Install dependencies
npm install

# Copy GLB files from the IFC pipeline
# (See the ifc-webar-spatial-pipeline README for export instructions)

# Start development server
npm run dev
Prerequisites
Requirement	Version	Notes
Node.js	18+	—
npm	9+	—
Android device	Chrome 81+	For WebXR AR
Desktop	Chrome/Edge	For debugging
WebXR Browser Support
Platform	Support	Notes
Android (Chrome)	✅ Full	Target platform
Android (Edge, Firefox)	✅ Supported	Should work
iOS (Safari)	❌ Not supported	Apple does not implement WebXR
iOS (Any browser)	❌ Not supported	All iOS browsers use WebKit
Desktop (Chrome/Edge)	✅ Yes	For development
For iOS users: The app falls back to a desktop-style 3D viewer (orbit controls) when WebXR is unavailable.

How to Use
1. Prepare GLB Files
Run the IFC to GLB pipeline to generate GLB files.

Copy the output to public/models/:

text
public/models/
├── combinedMesh/
│   └── building_combined.glb
├── GroundFloor/
├── Level_01/
├── Level_02/
└── ...
2. Launch the App
bash
npm run dev
Open http://localhost:5173 in your browser.

3. Enter AR Mode (Android/Desktop with Camera)
Tap "ENTER AR MODE"

Grant camera permissions

Point camera at a flat surface (floor, table, ground)

4. Place the Building
Wait for the green reticle to appear on the surface

Tap "PLACE BUILDING"

The building anchors to the reticle position

5. Controls
Control	Function
STORIES (NAV button)	Opens panel to toggle floors (GroundFloor, Level_01, etc.)
SYSTEMS (LAYERS button)	Opens panel to toggle categories (Structure, Openings, Circulation, MEP)
SPACES (PLACE button)	Toggles room labels overlay
Scale slider	Adjust building size (0.1x — 2.0x)
Rotation slider	Rotate building (-180° to 180°)
Opacity slider	Adjust transparency (0% — 100%)
RESET (top right)	Reset camera, toggles, and sliders
6. Toggle Multiple Storeys
Select L1 → building appears

Select L2 → L2 loads on top of L1 (stacked by elevation)

Deselect L2 → L2 disappears, L1 remains

"ALL" button → loads single combined GLB with all storeys pre-stacked

Project Structure
text
webar-construction-validation-tool/
├── public/
│   └── models/                    # GLB files from IFC pipeline
├── src/
│   ├── components/
│   │   ├── ARView.tsx             # WebXR + Three.js core
│   │   ├── StoreySelector.tsx     # Storey toggle UI
│   │   ├── CategoryToggles.tsx    # System toggle UI
│   │   ├── SpacesControls.tsx     # Placement + space labels
│   │   └── HeaderNav.tsx          # Top bar with reset
│   ├── utils/
│   │   ├── materials.ts           # PBR material definitions
│   │   ├── loadStoreyGLBs.ts      # GLB loading utilities
│   │   ├── spacesOverlay.ts       # Room label projection
│   │   └── storeyElevation.ts     # Storey elevation helpers
│   ├── App.tsx                    # Main UI orchestration
│   ├── types.ts                   # TypeScript interfaces
│   └── index.css                  # Global styles
├── package.json
├── vite.config.ts
└── README.md
Troubleshooting
Issue	Solution
WebXR not available	Use Android Chrome or desktop Chrome with camera
Models not loading	Check that GLB files are in public/models/{Storey}/
Reticle not appearing	Ensure room is well-lit, point at a textured surface
Model floating	Adjust opacity or use scale slider to verify model loaded
iOS shows desktop mode	Normal — WebXR not supported on iOS
Building for Production
bash
npm run build
The output will be in the dist/ folder. Deploy to any static hosting service (GitHub Pages, Netlify, Vercel).

Related Repository
ifc-webar-spatial-pipeline — IFC to GLB conversion pipeline

License
This project is for demonstration purposes as part of the BIM-AR Validation Tool assignment.

Created by Balaji Velu