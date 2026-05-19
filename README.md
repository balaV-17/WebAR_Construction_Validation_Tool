# WebAR MEP Component Placement System

A production-grade WebXR application that allows construction professionals to place, visualize, and interact with 3D MEP (Mechanical, Electrical, Plumbing) components and building structures directly onto real-world surfaces using Augmented Reality.

## 🌟 Concept

This application bridges the gap between digital BIM (Building Information Modeling) and real-world environments. By leveraging WebXR and Three.js, it projects architectural models and system components (like HVAC ducts, Plumbing pipes, and Electrical conduits) into physical spaces. 

The current demo utilizes optimized placeholder geometries to represent different MEP disciplines and building floors, establishing and verifying the complex interaction model (Pointer, Spawning, Teleporting, History) before integrating heavy, detailed BIM models (`model1.glb`).

## 🔄 App Workflow & Features

1. **AR Initialization**: The app asks for camera permissions and looks for physical planes (floors/tables) using WebXR Hit-Testing.
2. **Reticle Tracking**: A green ring (reticle) appears mapped to physical surfaces.
3. **Placing the Building via Pointer**: By default, pointing the reticle and tapping "Place Bldg" will anchor the default building structure to that location in the real world. 
4. **Isolating Floors**: Users can quickly toggle visibility of Floor 1, 2, 3, or Floor 7 (Plum) using the right-side control panel.
5. **Teleportation**: If exactly *one* floor is toggled on, the "TP ↓" button becomes active, allowing the user to virtually step inside that specific floor level by shifting the world.
6. **Placing MEP Systems**: Selecting a system on the top bar (HVAC, Plumb, Elec, Fire) changes the active placement mode. Clicking "Place {System}" stamps that specific component type onto the physical anchor point.
7. **History Management**: Users can Undo or Redo placements instantly. The "Clr" button clears all customized placements from the environment.

## 📱 User Instructions

### Starting the Session
- Open the application on a WebXR-compatible mobile browser (e.g., Chrome on Android or WebXR viewer on iOS).
- Tap the **ENTER AR** button located in the center of the screen.

### Placing the Building
- Slowly move your phone side-to-side to scan the floor or a table.
- Wait for the **Green Reticle** to appear.
- Without selecting any specific MEP system, tap **PLACE BLDG** to drop the simulated building structure at the reticle's location.
- You can move the reticle and tap "PLACE BLDG" again to instantly move the building to the new pointer location.

### Placing Components
- Tap an icon in the top menu (e.g., **HVAC** or **Plumb**).
- Point the reticle at a physical surface.
- Tap **PLACE HVAC** to spawn that component at the pointer.

### Managing Layers (Floors)
- Use the right panel to turn different floors ON (Green) or OFF (Gray).
- Isolate a single floor to unlock the **TP ↓ (Teleport)** feature.

### History (Undo / Redo / Clear)
- **Undo**: Reverts the last placement or movement.
- **Redo**: Restores the reverted action.
- **Clr**: Instantly hides all placed objects to reset your view. *(No confirmation dialog is used to prevent AR session breaking / freezing on mobile).*

---

## 🛠 Integrating your own `model1.glb`

When you are ready to replace the simulated building with your actual glTF model:

1. Place your `model1.glb` file into the `/public` directory of this workspace.
2. Open `/src/components/ARView.tsx`.
3. Locate the `// 🚀 HOW TO LOAD YOUR OWN MODEL` block around line 59.
4. Uncomment the `GLTFLoader` code block.
5. Ensure the nodes in your Blender/Revit file are strictly named `Mod-Floor-1`, `Mod-Floor-2`, `Mod-Floor-3`, and `Mod-Floor-7` so the UI toggles map perfectly to your hierarchy geometry.

---

## 💻 Quick VS Code Setup Workspace

To run this project locally for development or testing:

### Prerequisites:
- **VS Code**: Installed on your machine.
- **Node.js**: Installed (18.x or later recommended).

### 1. Install & Run
1. Open this project folder in **VS Code**.
2. Open the integrated terminal (`Ctrl` + `~`).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Testing WebXR Locally
WebXR strictly requires a **Secure Context (HTTPS)** to function. Testing AR features on a local computer with a mobile device requires specific steps:

**Option A (Chrome USB Port Forwarding - Android only):**
- Connect your Android device via USB.
- Open `chrome://inspect/#devices` on your desktop Chrome.
- Set up port forwarding from port `3000` to `localhost:3000`.
- Open `http://localhost:3000` on your mobile Chrome (localhost is considered secure for WebXR testing).

**Option B (Vite Basic HTTPS Plugin):**
- Install the plugin: `npm install -D @vitejs/plugin-basic-ssl`
- Update `vite.config.ts` to include it.
- Connect your mobile device to the same Wi-Fi network and access the secure network IP provided by Vite.

**Option C (WebXR API Emulator Extension):**
- Install the **WebXR API Emulator** extension in your desktop Chrome/Firefox browser.
- You can test AR interactions right inside VS Code / Desktop browser without a mobile device!
