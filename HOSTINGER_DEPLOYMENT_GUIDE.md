# Hostinger Shared Hosting & Localhost Deployment Guide
**Project:** Mahesh Mokalkar Personal Brand Website Redesign  
**Domain:** maheshmokalkar.in  

---

## 1. How to Run Live on Localhost

To run the site locally in development mode:

```bash
# 1. Start the local Next.js development server
npm run dev
```

Open your browser and navigate to **`http://localhost:3000`**. You can test all 9 interactive pages, tab animations, stat counters, lightbox viewer, and contact form.

---

## 2. How to Export & Package for Hostinger Shared Hosting (`public_html` + `.sql`)

To generate the production bundle for Hostinger shared hosting:

```bash
# 1. Build the production static bundle
npm run build

# 2. Package for Hostinger public_html
npm run package-hostinger
```

This creates the folder **`hostinger_public_html/`** containing all static site files, the PHP contact form handler, and the database schema.

---

## 3. Hostinger Upload Instructions (Step-by-Step)

### Step 3.1: Upload Files to `public_html`
1. Log in to your **Hostinger hPanel** (or cPanel).
2. Go to **File Manager** -> navigate to `public_html/`.
3. Clear out any old WordPress or temporary files from `public_html/`.
4. Upload all files from the local `hostinger_public_html/` folder (or zip `hostinger_public_html/`, upload it to `public_html/`, and click **Extract**).

---

### Step 3.2: Create MySQL Database & Import `.sql` File
1. In Hostinger hPanel, go to **Databases** -> **MySQL Databases**.
2. Create a new database (e.g. `u123456_maheshdb`) and a new MySQL user (e.g. `u123456_maheshuser`) with a strong password.
3. Click **Enter phpMyAdmin** for your new database.
4. Click the **Import** tab at the top.
5. Choose the **`maheshmokalkar_db.sql`** file located inside `public_html/` (or from your computer) and click **Go** / **Import**.

---

### Step 3.3: Configure Database Credentials in `config.php`
Open `public_html/config.php` in Hostinger File Manager Code Editor and update line 9–11 with your Hostinger database details:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456_maheshdb');   // Your Hostinger database name
define('DB_USER', 'u123456_maheshuser'); // Your Hostinger database username
define('DB_PASS', 'YourStrongPassword');  // Your Hostinger database password
```

---

## 4. Summary of Website Pages

- **Home (`/`)**: Narrative hero, 3 Pillars tabbed view, 5 impact counters, Aai-Baba tribute block, timeline preview, testimonials.
- **About (`/about`)**: Full long-form biography, core values grid, family cards, GENIUS handbook callout.
- **As a Govt. Engineer (`/engineer`)**: PWD Grade-II role details, infrastructure project cards, engineering philosophy.
- **As a Rotarian (`/rotary`)**: Past District Governor RID 3030 tenure details, 3 clubs chartered (Hinganghat, Arvi, Wani), awards.
- **Flagship Initiatives (`/initiatives`)**: 105 Pediatric Heart Surgeries, Sapne Sach Hue, Night School, Shelter Housing Society, etc., with detail modal.
- **Gallery (`/gallery`)**: Filterable photo gallery (All, Engineer, Rotary, Community, Family) with Lightbox viewer.
- **Blog (`/blog`)**: Curated official stories (unrelated spam posts completely purged).
- **Downloads (`/downloads`)**: Executive CV (PDF), GENIUS book summary, Press Kit.
- **Contact (`/contact`)**: Contact form posting to `/api/contact.php`, location card, and direct contact details.
