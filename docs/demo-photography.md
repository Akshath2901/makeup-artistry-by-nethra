# Demonstration photography

**Status: TEMPORARY. Replace every image below before public launch.**

Since Stage 5.1 the whole site uses **exactly six** photographs (owner decision, 2026-11-13). They are reused across pages with different crops (`details` on each look in `src/content/portfolio.ts`). Do not add more.

None of them is the artist's work, her client, or a real booking. Each is marked `status: "demo"`, and the site shows a visible "Demonstration image" label on it. The lightbox also shows the photographer's credit. The only unlabelled uses are small close crops whose full photograph is labelled on the same screen, on pages that also carry the demo notice.

- **Source:** Unsplash, free-licence filter only (no Unsplash+ images).
- **Licence:** [Unsplash License](https://unsplash.com/license). Free to use, including commercially, with no attribution required (credit kept anyway). Checked on 2026-11-13.
- **Limit:** Unsplash does not provide model releases. Fine for a labelled client preview, but must not appear on the public launch site.
- **Approved by:** the project owner, 2026-11-13.
- **Files:** `public/photos/demo/`, 1600 px on the long side, JPEG. Next.js serves smaller WebP versions per screen size.

## The six photographs

| # | ID | Category | Look | Photographer | Unsplash page |
| --- | --- | --- | --- | --- | --- |
| 1 | royal-04 | Royal bridal | Heirloom red | gurpreet singh | /photos/a-woman-in-a-red-and-gold-bridal-outfit-Po-nggQqplE |
| 2 | royal-03 | Royal bridal | Gilded veil | AMISH THAKKAR | /photos/woman-in-red-and-gold-floral-hijab-lAY2TAhN06k |
| 3 | contemporary-01 | Contemporary bridal | Soft gold | iKshana Productions | /photos/a-smiling-woman-adorned-in-traditional-indian-jewelry-and-attire-KxHcyNOIO_M |
| 4 | reception-02 | Engagement & reception | Evening rose | ARTO SURAJ | /photos/a-woman-in-a-red-and-gold-bridal-outfit-Brte6H1scQk |
| 5 | cocktail-04 | Cocktail | After dark | hosein zanbori | /photos/a-woman-with-a-pink-and-purple-make-up-on-her-face-0o4QY48B-r0 |
| 6 | party-01 | Party | Festive glow | Bella Pon Fruitsia | /photos/woman-in-green-gold-and-red-sari-dress-hiding-her-right-eye-while-smiling-y9HsMX3-mUY |

Full metadata (subject, alt text, crop focus, placement) lives with each entry in `src/content/portfolio.ts`.

**Unused files:** the other 21 photos downloaded in Stage 5 were deleted on 2026-11-13 with the project owner's approval. `public/photos/demo/` now holds only these six (about 2 MB).

## Replacing demo images with the artist's photographs

For each of her images:

1. Put the file in `public/photos/client/` (JPEG, at least 2000 px on the long side).
2. In `src/content/portfolio.ts`, edit the matching entry:
   - `src`: the new file path
   - `width` and `height`: the file's real pixel size
   - `alt`: describe the look
   - `focus`: crop point that keeps the face in frame, for example `"50% 30%"`
   - `status: "client-verified"`
   - `source: { name: "Client" }`
3. Check the two `details` crops on the matching look still frame the right part of the new photo.
4. The "Demonstration image" label disappears automatically for client-verified images.

When no demo images remain:

- The demo notice on the portfolio page disappears on its own.
- Rewrite the six look titles, descriptions and notes (`looks` in `portfolio.ts`) with the artist. They currently describe the demo photos.
- Delete `public/photos/demo/`.

Search the code for `status: "demo"` to find anything left over.
