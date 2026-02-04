# Improve Readability of Recommendations Section

## Status: ✅ IMPLEMENTED

## Problem
The recommendation text blocks are long (60-130 words each), making them difficult to scan quickly.

## Solution: Truncate with "Read More"
Show 4-5 lines of text with a "Read more" link that expands to show the full text.

## Files Modified

### 1. `css/styles.css` (line ~1001)
Added truncation styles to `.recommendation-card__text`:

```css
.recommendation-card__text {
    font-size: var(--font-size-base);
    color: var(--text-light);
    line-height: 1.7;
    margin-bottom: var(--space-md);
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.recommendation-card__text.expanded {
    -webkit-line-clamp: unset;
    overflow: visible;
}

.recommendation-card__read-more {
    background: none;
    border: none;
    color: var(--accent-purple);
    font-size: var(--font-size-sm);
    cursor: pointer;
    padding: 0;
    margin-bottom: var(--space-xl);
    font-weight: 500;
}

.recommendation-card__read-more:hover {
    text-decoration: underline;
}
```

### 2. `js/main.js` (line ~166)
Added "Read more" button to the recommendation card template:

```javascript
<p class="recommendation-card__text">${rec.text}</p>
<button class="recommendation-card__read-more" onclick="this.previousElementSibling.classList.toggle('expanded'); this.textContent = this.textContent === 'Read more' ? 'Read less' : 'Read more';">Read more</button>
```

## Verification Steps
1. Open `index.html` in browser
2. Scroll to Recommendations section
3. Verify text is truncated to ~4 lines
4. Click "Read more" to expand, "Read less" to collapse
5. Confirm all three cards have uniform initial height
