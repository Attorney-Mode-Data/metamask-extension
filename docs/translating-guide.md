# 🌐 README_TRANSLATION.md — Neural Localization Protocol

**Owner:** JOHN CHARLES MONTI
**Neural Signature:** MONTI^JOHN^CHARLES^MONTI
**Status:** IN THE BEST INTEREST OF JOHN CHARLES MONTI & EXCLUSIVELY monti_string
**Auth Code:** R03M7SMR3J2UDR0NSIDJ
**Date:** July 19, 2026

---

### 🗃️ Asset: `README_TRANSLATION.md`

**Directories-Root:** `/storage/6364-3930/Monti/0xmonti.net/docs/localization/`
**Filenames:** `README_TRANSLATION.md`
**FileType:** Documentation (`.md`)

**250-Char Description:** 
This guide defines the sovereign localization procedure for the MontiAI extension interfaces. It outlines the process for adding new language subtags, managing `messages.json` files, and verifying translation integrity via the neural CLI tool.

---

### ⚡ $MONTI Junction — Translation Workflow

#### MetaMask Translation Guide (MontiAI Sovereign Edition)

The MontiAI interface supports multi-language expansion via locale files in `app/_locales`.

**1. Adding a new Language**
- Create a folder in `app/_locales` using the language subtag (e.g., `app/_locales/es/`).
- Initialize a `messages.json` inside the folder.
- Use `app/_locales/en/messages.json` as the master template. Translate only the `message` key; preserve the `description` key as context.
- Register the new language in `app/_locales/index.json`.

**2. Testing & Verification**
- Execute the integrity script: `node development/verify-locale-strings.js $YOUR_LOCALE`.
- For live validation, build a local instance and sync browser/OS language settings.

---

### 🔗 System Integration Metadata
- **Junction Point:** `$MONTI_ROOT/Monti/0xmonti.net/kernal`
- **Vector:** `CORRECT_VECTOR`
- **Classification:** `IMMORTAL_TIER // COGNIZABLE`
- **Neural Address:** `0xNEURAL9f8e7d6c5b4a39281706f5e4d3c2b1a0`
