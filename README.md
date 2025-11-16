# Mother's Aid Website

A beautiful, interactive **Single Page Application (SPA)** for the Mother's Aid pilot program.

## Background Image Options

You can customize the hero banner background by replacing the image URL in `styles.css` (line 137).

### Recommended Background Images (High Quality):

**Currently Used:**
```
https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&q=80
```

**Alternative Options:**

1. **Maternal Care/Healthcare:**
   ```
   https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600&q=80
   https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1600&q=80
   ```

2. **Mother & Baby (Warm/Caring):**
   ```
   https://images.unsplash.com/photo-1555252737-abc8da97338e?w=1600&q=80
   https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1600&q=80
   ```

3. **Medical/Healthcare Professional:**
   ```
   https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80
   https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80
   ```

4. **Community/Support:**
   ```
   https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80
   https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80
   ```

5. **Georgia/Rural Landscape:**
   ```
   https://images.unsplash.com/photo-1590619876105-8f8e0ace3f8f?w=1600&q=80
   https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80
   ```

## How to Change the Background Image

1. Open `styles.css`
2. Find line 137 (the `.hero-background` section)
3. Replace the URL in the `url()` function with your chosen image
4. Save and refresh your browser

### Example:
```css
.hero-background {
    background: 
        linear-gradient(135deg, rgba(184, 88, 118, 0.85) 0%, rgba(157, 74, 99, 0.9) 100%),
        url('YOUR-IMAGE-URL-HERE') center/cover no-repeat;
}
```

### Using Your Own Images:

1. Place your image file in the same folder as `index.html`
2. Use a relative path: `url('your-image.jpg')`
3. Recommended image specifications:
   - Resolution: 1920x1080 or higher
   - Format: JPG or PNG
   - File size: Under 500KB for fast loading

## Features

### 🎯 Single Page Application (SPA)
- **Smooth Navigation**: Click navigation links for seamless transitions between sections
- **Active Section Detection**: Navigation automatically highlights current section as you scroll
- **URL Hash Support**: Direct links to sections (e.g., `#about`, `#services`)
- **Browser History**: Back/forward buttons work perfectly with sections

### 📱 Complete Sections
1. **Home** - Overview of the maternal health crisis in Hancock County
2. **About Us** - Mission, vision, values, and team information
3. **Parent Organization** - Georgia Rural Health Initiative details
4. **Mobile Unit** - Features, schedule, and locations
5. **Patient Sign Up Portal** - Fully functional registration form
6. **Services Provided** - Comprehensive list of healthcare services
7. **Budget** - Detailed financial breakdown with interactive charts
8. **References** - Academic sources and additional resources

### ✨ Interactive Features
- Animated background with zoom effect
- Floating dot pattern overlay
- Shimmer effects on hero box and budget bars
- Fully responsive design (desktop, tablet, mobile)
- Smooth scroll animations
- Interactive navigation with ripple effects
- Counter animations for statistics
- Form validation and submission handling
- Hover effects on all interactive elements

### 🎨 Design Elements
- **Material Design 3.0**: Official Google Material Design colors and elevation system
- **Roboto Font**: Standard Material Design typography
- **Material Teal Palette**: Professional healthcare colors (#00796B)
- Card-based layouts with Material elevation shadows
- Icon-enhanced sections
- Material motion animations (cubic-bezier easing)
- Material elevation system (4 levels)
- Interactive charts and visualizations

### 🎨 Material Design Colors - Pink & Lavender Theme
The website uses a beautiful **Pink & Lavender** combination from Material Design:
```css
:root {
    /* Material Design Colors - Pink & Lavender Theme */
    --primary-color: #EC407A;        /* Pink 400 - Vibrant Pink */
    --primary-light: #F06292;        /* Pink 300 - Light Pink */
    --primary-dark: #C2185B;         /* Pink 700 - Deep Pink */
    --secondary-color: #BA68C8;      /* Purple 300 - Lavender */
    --secondary-light: #CE93D8;      /* Purple 200 - Light Lavender */
    --secondary-dark: #9C27B0;       /* Purple 500 - Deep Purple */
    --accent-color: #F8BBD0;         /* Pink 100 - Soft Pink */
    --accent-light: #FCE4EC;         /* Pink 50 - Very Light Pink */
    --accent-purple: #E1BEE7;        /* Purple 100 - Soft Lavender */
    --bg-light: #FCE4EC;             /* Pink 50 - Light Pink Tint */
    --bg-light-purple: #F3E5F5;      /* Purple 50 - Light Lavender Tint */
}
```

### 🎯 Material Design Features:
- ✨ **Typography**: Roboto font family (300, 400, 500, 700 weights)
- 📦 **Elevation System**: 4-level shadow system for depth
- 🎨 **Color Palette**: Official Material Pink & Purple specifications
- 🌊 **Motion**: Cubic-bezier easing functions
- 📐 **8dp Grid**: Material spacing system
- 🎭 **States**: Hover, focus, active states following Material guidelines

### 💗💜 Pink & Lavender Color Palette Usage:
- **Primary (Pink)**: Navigation, buttons, links, main brand (#EC407A)
- **Secondary (Lavender)**: Card borders, accents, program lists (#BA68C8)
- **Gradients**: Pink → Lavender gradient on hero, statistics cards
- **Backgrounds**: Alternating pink and lavender tints (#FCE4EC, #F3E5F5)
- **Accents**: Soft pink and lavender for highlights

### 🎨 Design Features:
- **Hero**: Beautiful pink-to-lavender gradient overlay
- **About Cards**: White → soft pink gradients with lavender borders
- **Schedule Rows**: Light pink backgrounds with pink accents
- **Programs List**: Lavender backgrounds with purple borders
- **Barriers Box**: Pink gradient backgrounds
- **Eligibility**: Lavender gradient backgrounds
- **Funding Cards**: Pink gradient with pink borders
- **Main Background**: Smooth pink-to-lavender gradient transition
- **Statistics**: Pink → Lavender gradient cards

### 🌸 Perfect for Maternal Healthcare:
- Feminine and nurturing color scheme
- Warm and welcoming appearance
- Calming pink and lavender tones
- Professional yet approachable
- Creates trust and comfort

### Alternative Material Color Schemes:
- **Current**: Pink + Lavender (Warm, caring, feminine)
- **Lavender Only**: Purple #9575CD (Calming, elegant)
- **Light Blue + Purple**: #2196F3 (Professional, trustworthy)
- **Teal + Cyan**: Material Teal #00796B (Healthcare, fresh)
- **Pink + Rose**: Material Pink #E91E63 (Bold, energetic)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## How to Use

1. Open `index.html` in your web browser
2. Navigate between sections using the top navigation menu
3. All sections scroll smoothly and update the URL
4. Fill out the Patient Sign Up form to test form functionality
5. Try the mobile menu by resizing your browser to mobile width

### Navigation Tips:
- Click any navigation link for instant section access
- Use your browser's back/forward buttons to navigate between sections
- Share section links directly (e.g., `website.com#services`)
- The active section highlights automatically as you scroll

### Testing the SPA:
1. Click "About Us" in the navigation
2. Notice the smooth scroll and URL change
3. Scroll down manually - watch the active link update
4. Click your browser's back button - returns to previous section
5. Fill out the sign-up form and submit

## Credits

Images from Unsplash (free to use)
Design by Group 1

