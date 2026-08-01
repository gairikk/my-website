# Project Overview

Food Coupon Distribution

# 🪔 Bhog Bela — Durga Puja Food Coupon Management System

Bhog Bela is a progressive web application built for housing societies and puja committees to manage, book, verify, and distribute food coupons during Durga Puja. It features real-time Firebase synchronization, cryptographic HMAC-secured QR codes for meal tracking, live kitchen dashboards, and detailed admin analytics.

---

## ✨ Key Features

* **🎟️ Multi-Day & Multi-Meal Booking System:** Book breakfast, lunch, and dinner coupons across all four days of Durga Puja (Saptami, Ashtami, Navami, Dashami) with support for both vegetarian and non-vegetarian options.
* **📦 Flexible Packaging (Dine-in vs. Parcel):** Customize plate counts for each meal slot choosing between counter dine-in and packed takeaway boxes (+₹15 charge per parcel box).
* **🔒 Unified Resident Orders (Single Order ID):** Residents can book additional meals later using the **"Book More Coupons"** option, which seamlessly merges new orders into their existing Order ID under the same name and flat.
* **🔐 PIN-Protected "My Coupons" & Access:** Residents set a 4-digit security PIN during initial booking, allowing them to securely retrieve and manage their tickets.
* **🧾 Advanced Payment Verification & Bifurcation:** Supports Cash and UPI payments with 12-digit UTR tracking. The admin dashboard features a granular payment bifurcation view showing total aggregated amounts, already paid amounts, and pending new amounts for verification.
* **📷 Secure QR Scanner & Counter Service:** Volunteer counter interface featuring a built-in camera QR code scanner with cryptographic HMAC validation to prevent tampering and duplicate plate delivery.
* **👨‍🍳 Real-Time Kitchen Live Feed:** Live preparation metrics for kitchen staff displaying exact real-time counts of verified plates and parcel boxes to cook.
* **📊 Admin Reports & CSV Exports:** Instant analytics for verified revenue, plate count breakdowns, master reports, and cook prep forecast CSV exports.
* **🌐 Multi-Language Support:** Fully toggleable English and Bengali user interface.

---

## 🛠️ Technology Stack

* **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3 (Responsive mobile-first layout)
* **Backend / Database:** Firebase Firestore (Real-time synchronization)
* **Libraries & Utilities:**
  * `qrcode.js` for dynamic QR code generation
  * `jsQR` for camera-based QR code scanning
  * `html2canvas` for downloading digital meal tickets as high-res PNG images
  * `PapaParse` for browser-based CSV parsing (Admin bulk flat subscriptions upload)

---

## 🚀 Getting Started & Setup

1. **Clone or Download:** Save the project file as `index.html` on your local machine or web server.
2. **Firebase Configuration:** The project is pre-configured with a Firebase project instance (`my-website-db-ee1d5`). Ensure your Firestore security rules allow read/write access for development or configure your custom Firebase credentials in the module script block of `index.html`.
3. **Run Locally:** Open `index.html` in any modern web browser or serve it via a local static server (e.g., Live Server in VS Code).

---

## 👥 User Guides & Manuals

For detailed step-by-step instructions on how to use the platform, please refer to the standalone guide files:

* [Resident User Guide (`user_guide.html`)](./user_guide.html) — Manual for booking coupons, logging into "My Coupons", and adding more meals.
* [Admin & Volunteer Guide (`admin_guide.html`)](./admin_guide.html) — Manual for committee payment verification, counter QR scanning, and kitchen preparation feeds.

---

## ⚙️ Committee Configuration (`CONFIG`)

Organizers can customize event details, operating hours, prices, and committee access PINs directly inside the `CONFIG` object in the script section:

```javascript
const CONFIG = {
  eventName: "Shubho Durga Puja 2026",
  upiId: "committee@upi",
  upiName: "Puja Committee",
  committeePin: "7576", // Volunteer/Admin access PIN
  hmacSecretKey: "BHOG_BELA_SECRET_2026",
  parcelCharge: 15,
  // ... days and meals configuration
};
