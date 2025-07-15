---
title: "Exploring the Flexbox Layout in CSS"
date: 2024-03-05
excerpt: "A quick dive into how Flexbox works and how to use it for building responsive layouts."
tags: notes
layout: inner.html
---

Flexbox is a powerful layout system in CSS that allows for easy alignment and distribution of elements within a container.

### Key Features of Flexbox:
- **Flex containers** define the main layout structure.
- **Flex items** can be aligned horizontally or vertically.
- **Justify-content** controls spacing along the main axis.
- **Align-items** and **align-self** manage alignment on the cross axis.

---

#### Example: Centering an Element with Flexbox
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
