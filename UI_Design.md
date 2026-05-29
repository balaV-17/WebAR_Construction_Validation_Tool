# UI Design Document — IFC WebXR Viewer

## Overview

The UI is adapted from a previous construction validation tool, redesigned for IFC building visualization. The layout remains consistent: three-column bottom bar with collapsible panels, accessible in both AR and non-AR modes.

---

## Design Principles

| Principle | Implementation |
|-----------|----------------|
| **Thumb-friendly** | All controls within reach on mobile devices |
| **Minimal clutter** | Collapsible panels hide advanced options |
| **Semantic clarity** | Labels match architectural terminology (Structure, Openings, Circulation, MEP) |
| **Consistent feedback** | Active toggles highlighted with green borders/pulsing indicators |

---

## UI Layout — Three-Column Bottom Bar

---

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ [ 3D Model / Camera View ] │
│ │
│ ● │
│ (Reticle in AR mode) │
│ │
├─────────────────────┬─────────────────────────┬─────────────────────────────┤
│ │ │ │
│ ┌─────────────┐ │ ┌─────────────┐ │ ┌─────────────┐ │
│ │ STORIES │ │ │ SPACES │ │ │ SYSTEMS │ │
│ │ (NAV) │ │ │ (PLACE) │ │ │ (LAYERS) │ │
│ └─────────────┘ │ └─────────────┘ │ └─────────────┘ │
│ │ │ │
│ ┌─────────────┐ │ ┌─────────────┐ │ ┌─────────────┐ │
│ │ SCALE │ │ │ ROTATE │ │ │ OPACITY │ │
│ │ slider │ │ │ slider │ │ │ slider │ │
│ └─────────────┘ │ └─────────────┘ │ └─────────────┘ │
│ │ │ │
├─────────────────────┴─────────────────────────┴─────────────────────────────┤
│ │
│ [ PLACE BUILDING ] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

---

---

## Column 1: STORIES & SCALE

### STORIES Button (Collapsible)

| Element | Description |
|---------|-------------|
| **Icon** | Building/layers symbol |
| **Label** | "STORIES" |
| **State indicator** | Pulsing green dot when open |
| **Panel content** | Grid of storey toggle buttons (GroundFloor, Level_01, Level_02, etc.) |

### Panel Content — Storey Toggle Grid
┌─────────────────────────────────────┐
│ STORIES │
│ │
│ [GND] [L01] [L02] [L03] [L04] │
│ │
│ [ROOF] [ATT] [ZEH] │
│ │
│ [ RESET VIEW ] │
└─────────────────────────────────────┘


| Button | Function |
|--------|----------|
| **Storey buttons (GND, L01, L02, etc.)** | Toggle storey visibility (multiple can be active) |
| **RESET VIEW** | Reset camera to overview, clear all toggles, reset scale/rotation/opacity |

### SCALE Slider

| Control | Range | Default |
|---------|-------|---------|
| Slider | 0.10x — 2.00x | 1.0x |
| Label | "SCALE" | — |


---

## Column 2: SPACES & ROTATION

### SPACES Button

| Element | Description |
|---------|-------------|
| **Icon** | Map pin / location marker |
| **Label** | "SPACES" |
| **Function** | Toggles room labels overlay (from spaces.json) |

### ROTATION Slider

| Control | Range | Default |
|---------|-------|---------|
| Slider | -180° — 180° | 0° |
| Labels | "-180°", "ROTATE", "180°" | — |

---

## Column 3: SYSTEMS & OPACITY

### SYSTEMS Button (Collapsible)

| Element | Description |
|---------|-------------|
| **Icon** | Layers symbol |
| **Label** | "SYSTEMS" |
| **State indicator** | Pulsing green dot when open |
| **Panel content** | 2x2 grid of category toggles |

### Panel Content — Category Toggle Grid
┌─────────────────────────┐
│ SYSTEMS │
│ │
│ [STRC] [OPEN] │
│ │
│ [CIRC] [MEP] │
└─────────────────────────┘

| Button | IFC Types | Color |
|--------|-----------|-------|
| **STRC (Structure)** | IfcWall, IfcSlab, IfcColumn, IfcBeam | Gray |
| **OPEN (Openings)** | IfcDoor, IfcWindow | Orange |
| **CIRC (Circulation)** | IfcStair, IfcStairFlight, IfcRailing | Yellow |
| **MEP (MEP)** | IfcFlowTerminal, IfcFlowController | Blue |

### OPACITY Slider

| Control | Range | Default |
|---------|-------|---------|
| Slider | 0% — 100% | 85% |
| Label | "OPACITY" | — |

---

## PLACE BUILDING Button (Bottom Center)

| State | Appearance | Function |
|-------|------------|----------|
| **Inactive** | Gray border, "PLACE BUILDING" | Building hidden, reticle visible |
| **Active** | Green border, "BUILDING PLACED" | Building anchored to reticle position, visible |

---

## Top Bar
┌─────────────────────────────────────────────────────────────────────────────┐
│ ● [🏢] IFC WEBAR SPATIAL PIPELINE [RESET] │
│ Created by Balaji Velu │
└─────────────────────────────────────────────────────────────────────────────┘

| Element | Description |
|---------|-------------|
| **Green dot** | AR tracking status indicator |
| **Building icon** | Logo / branding |
| **Title** | "IFC WEBAR SPATIAL PIPELINE" |
| **Subtitle** | "Created by Balaji Velu" |
| **RESET button** | Reset camera, toggles, scale, rotation, opacity |

---

## Non-AR Mode (Pre-AR Entry Screen)
┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ [Rotating GLB Preview] │
│ │
│ │
│ ┌─────────────────────┐ │
│ │ ENTER AR MODE │ │
│ └─────────────────────┘ │
│ │
│ ACTIVE OVERLAY TO INTEGRATE │
│ BIM STRUCTURES │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

---

## AR Mode — Reticle

| Element | Appearance | Function |
|---------|------------|----------|
| **Ring** | Green, pulsing | Indicates detected surface |
| **Crosshair** | Green lines | Center point for placement |

---

## Interaction States

### State A: Initial Launch (Non-AR)

- Model rotates in center
- All toggles visible but grayed/inactive
- "ENTER AR MODE" button prominent

### State B: AR Active, No Placement

- Camera view with reticle
- Toggles active (green when selected)
- "PLACE BUILDING" shows gray border
- Building hidden

### State C: AR Active, Building Placed

- Building visible and anchored
- "PLACE BUILDING" shows green border, "BUILDING PLACED"
- User can toggle storeys/categories
- Scale/rotation/opacity affect entire building

### State D: AR Active, Multiple Storeys Active

- GroundFloor at Y=0
- Level_01 at Y=2.8m (stacked above)
- Level_02 at Y=5.6m
- All storeys anchored together

---

