# My Personal Blog

## Overview
Welcome to my blog, built with **Next.js!** This project features an admin dashboard for easy management of blog posts. Admin users can effortlessly add and delete articles across various topics, including lifestyle, technology, and startups.


https://github.com/user-attachments/assets/8bb449ac-573f-44fe-a18a-ace345800ed4



## Features

- **Blog Page**: Displays a list of blogs filterable by category (All, Startup, Lifestyle, Technology).
- **Email Subscription**: Users can subscribe by entering their email.
- **Detailed View**: Click on a blog post to display its detailed content.

## Admin Panel

- The admin panel includes three main features:
   - **Add Blog**: Easily create new blog posts.
   - **Blog List**: View and manage existing posts.
   - **Subscriptions List**: Monitor user subscriptions.
  
## Technologies Used

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **ORM:** Mongoose
- **HTTP Client:** Axios
- **Notifications:** React-Toastify
- **Cloud Storage**: Cloudinary

## Project Setup

1- Clone the repository:
```
git clone https://github.com/HebaHamdan2/MyPersonalBlog-App.git
cd MyPersonlBlog-App
```
2- Install dependencies:
```
npm install
```
3- Set up your **MongoDB connection**:
- Create a **.env** file in the root directory and add your MongoDB connection string:
```
MONGODB_URL=your_mongodb_connection_string
```
4- Set up your **Cloudinary configuration**:
- Add your Cloudinary credentials to the .env file:
  ```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
  ```
5- Run the development server:
```
npm run dev
```
6- Open your browser and navigate to **http://localhost:3000**.

## Deployment

The project is deployed using Vercel.

## Demo
You can check out the live demo [here](https://hebablogsapp.vercel.app/).

## Learning Experience

Throughout this project, I gained valuable insights into effectively handling API routing for both the admin and user sides. A highlight was deploying the project on **Vercel** and troubleshooting various issues. Leveraging TypeScript and ESLint helped me detect unused data and deprecated libraries, enhancing the overall quality of the application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
