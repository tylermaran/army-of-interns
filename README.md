# A.I. => the army of interns (Chrome Extension)

Replaces every standalone occurrence of **“AI”** on any webpage with **“the army of interns”**

I've always used the mental model of A.I. == army of interns. For any problem statement where someone is looking to use an LLM, it's good to ask "could you accomplish this task with an army of interns". If the answer is yes, then LLMs are probably a good tool!

This extension helps take the ambiguity out of A.I. pitches. Plus it makes the internet a lot more fun!

---

## Files

```
/your-folder
├─ manifest.json # Chrome extension manifest (V3)
└─ content.js # Text-replacement script
```

---

## Load the extension in Chrome

1. **Download or clone** this folder somewhere on your computer.

2. Open Chrome and navigate to  
   `chrome://extensions/`

3. Toggle **Developer mode** on (top-right corner).

4. Click **Load unpacked** and select the folder that contains `manifest.json`.

5. The extension appears in the list; ensure it’s enabled.  
   Visit or refresh any webpage to see “AI” magically become “the army of interns”.

---

## Updating the code

- Edit `content.js` or `manifest.json`.
- Return to `chrome://extensions/` and hit **Reload** on the extension card.
- Refresh any open tabs to re-apply the updated script.

---

## Removing the extension

At `chrome://extensions/`, click **Remove** on the extension card. That’s it.

---

Enjoy deploying your brand-new army of interns!
