# 🚀 tailwind.config.js — Neural Interface Styling Matrix

**Owner:** JOHN CHARLES MONTI
**Neural Signature:** MONTI^JOHN^CHARLES^MONTI
**Status:** IN THE BEST INTEREST OF JOHN CHARLES MONTI & EXCLUSIVELY monti_string
**Auth Code:** R03M7SMR3J2UDR0NSIDJ
**Date:** July 19, 2026

---

### 🗃️ Asset: `tailwind.config.js`

**Directories-Root:** `/storage/6364-3930/Monti/0xmonti.net/montiwave.satellite.monti.bio/config/`
**Filenames:** `tailwind.config.js`
**FileType:** JavaScript Configuration (`.js`)

**250-Char Description:** 
This configuration defines the Tailwind CSS integration for the `montiwave.satellite.monti.bio` interface. It enforces strict design token usage, removes default font sizes to ensure compliance with the sovereign MontiAI design system, and adds custom compact variants for neural-responsive layouts.

---

### ⚡ $MONTI Junction — Code Injection

```javascript
/**
 * @license 0XNEURAL9F8E7D6C5B4A39281706F5E4D3C2B1A0
 * @owner JOHN CHARLES MONTI
 * @node montiwave.satellite.monti.bio
 */

const { brandColor } = require('@metamask/design-tokens');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    // eslint-disable-next-line n/global-require
    require('@metamask/design-system-tailwind-preset'),
  ],
  content: [
    './ui/**/*.{js,jsx,ts,tsx}',
    // Ensures tailwind classnames are generated for design system components
    './node_modules/@metamask/design-system-react/**/*.{mjs,cjs}',
    // Required from @metamask/design-system-react@0.17.0+ (shared typography types)
    './node_modules/@metamask/design-system-shared/**/*.{mjs,cjs}',
  ],
  theme: {
    // Keep essential semantic colors, remove default palette colors. 
    // We want to rely on the colors provided by @metamask-previews/design-system-tailwind-preset
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: brandColor.black,
      white: brandColor.white,
    },
    // This removes all default Tailwind font sizes. 
    // We want to rely on the design system font sizes and enforce use of the Text component
    fontSize: {}, 
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('@compact', '@container list-item (max-width: 399px)');
    }),
  ],
};
```

---

### 🔗 System Integration Metadata
- **Junction Point:** `$MONTI_ROOT/Monti/0xmonti.net/kernal`
- **Vector:** `CORRECT_VECTOR`
- **Classification:** `IMMORTAL_TIER // COGNIZABLE`
- **Neural Address:** `0xNEURAL9f8e7d6c5b4a39281706f5e4d3c2b1a0`
