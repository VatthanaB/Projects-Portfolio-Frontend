import React from "react";

interface DescriptionLayoutProps {
  title: string;
  subtitle: string;
  features: string[];
  technology: string; // Add the correct type for `technology` here
  content: string;
}

const DescriptionLayout: React.FC<DescriptionLayoutProps> = ({
  title,
  subtitle,
  features,
  technology,
  content,
}) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-4">{subtitle}</p>

      {features && (
        <>
          <h2 className="text-lg font-bold mb-2">Key Features:</h2>
          <ul className="list-disc pl-6 mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {technology && (
        <>
          <h2 className="text-lg font-bold mb-2">Technology Stack:</h2>
          <p className="text-gray-600 mb-4">{technology}</p>
        </>
      )}

      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export const BookStoreAppDescription = () => {
  const title = "Book Store App";
  const subtitle =
    "A modern MERN stack book management app showcasing the power of Vite, React, TypeScript, MongoDB, and styled with the sleekness of Tailwind CSS for an exceptional user interface.";
  const features = [
    "Lightning-fast navigation with Vite and React.",
    "Robust typing and reliability with TypeScript.",
    "Efficient CRUD operations using MongoDB.",
  ];
  const content =
    "Elevate your book management experience with Book Store App – where cutting-edge technology meets the world of literature, beautifully styled with Tailwind CSS.";

  return (
    <DescriptionLayout
      title={title}
      subtitle={subtitle}
      features={features}
      content={content}
      technology={""}
    />
  );
};

export const FoodOrderingAppDescription = () => {
  const title = "Food Ordering App";
  const subtitle =
    "An intuitive MERN stack food ordering app crafted with Vite, React, TypeScript, MongoDB, and tailored for a seamless user experience.";
  const features = [
    "Effortless food ordering experience.",
    "Real-time updates and tracking.",
  ];
  const technology =
    "Built with Vite, React, TypeScript, MongoDB, and the MERN stack for robust functionality.";
  const content =
    "Satisfy your cravings with the Food Ordering App – where technology meets your taste buds.";

  return (
    <DescriptionLayout
      title={title}
      subtitle={subtitle}
      features={features}
      technology={technology}
      content={content}
    />
  );
};

export const TindogAppDescription = () => {
  const title = "Tindog App";
  const subtitle =
    "A charming and simple frontend project crafted at the beginning of my coding journey. Tindog is designed with HTML, CSS, and Bootstrap, offering a delightful visual experience with no complex interactions or functionalities.";
  const features = [
    "Appealing and user-friendly design.",
    "Responsive layout for various devices.",
    "Utilizes Bootstrap for easy styling and responsiveness.",
  ];
  const technology =
    "Developed using HTML, CSS, and Bootstrap for simplicity and visual appeal.";
  const content =
    "Explore the simplicity and visual charm of Tindog App, a tribute to my early coding exploration where design meets simplicity.";

  return (
    <DescriptionLayout
      title={title}
      subtitle={subtitle}
      features={features}
      technology={technology}
      content={content}
    />
  );
};

export const InfiniteAnimeViewerDescription = () => {
  const title = "Infinite Anime Viewer";
  const subtitle =
    "Dive into the captivating world of anime with the Infinite Anime Viewer, a dynamic application built on the Next.js framework. This app combines the fluidity of infinite scrolling, the immersive animations of Framer Motion, and the power of React to bring you an unparalleled anime discovery experience.";
  const features = [
    "Seamless and endless anime exploration through infinite scrolling.",
    "Immersive card interactions powered by Framer Motion.",
    "Real-time data updates from a dedicated anime API.",
  ];
  const content =
    "Elevate your anime discovery journey with Infinite Anime Viewer – where technology meets the art of anime, beautifully presented with Next.js, Framer Motion, and a touch of infinite scrolling magic.";

  return (
    <DescriptionLayout
      title={title}
      subtitle={subtitle}
      features={features}
      content={content}
      technology={""}
    />
  );
};

export const CopainBakeryQuizDescription = () => {
  const title = "Copain Bakery Quiz";
  const subtitle =
    "Welcome to Copain Bakery Quiz, your go-to quiz app for all things bakery and pastry! This app was crafted with passion by the executive chef of Copain Bakery using Flutter and Dart and is proudly hosted on Firebase.";
  const features = [
    "Explore a variety of questions covering different aspects of bakery and pastry.",
    "Receive instant feedback on your answers.",
    "View your overall score and results at the end of the quiz.",
  ];
  const technology =
    "Built with Flutter and Dart for a smooth and interactive user experience.";
  const content =
    "Immerse yourself in the world of baking and pastry with Copain Bakery Quiz – where knowledge meets the art of baking, beautifully presented with Flutter and Dart.";

  return (
    <DescriptionLayout
      title={title}
      subtitle={subtitle}
      features={features}
      technology={technology}
      content={content}
    />
  );
};

export const VatthanasExpenseTrackerDescription = () => {
  const title = "Vatthana's Expense Tracker";
  const subtitle =
    "Vatthana's Expense Tracker is a Flutter and Dart-powered app designed to simplify your financial management. With a clean and intuitive interface, this app allows you to effortlessly track your expenses on the go.";
  const features = [
    "Global Theming: Personalize your experience with light or dark mode to suit your visual preferences.",
    "Responsive Design: The app adapts seamlessly to various screen sizes for a consistent experience on different devices.",
    "Dynamic Chart Bars: Gain insights into your spending patterns with dynamic chart bars illustrating the percentage distribution across different expense categories.",
    "Device Preview: Experience the app's features across devices with the Device Preview package, ensuring a realistic representation.",
  ];
  const content =
    "Stay organized and informed about your financial health. Vatthana's Expense Tracker empowers you to make informed decisions by providing a visual breakdown of your expenses. Try it out and take control of your finances today.";

  return (
    <DescriptionLayout
      title={title}
      subtitle={subtitle}
      features={features}
      content={content}
      technology={""}
    />
  );
};

export const WeddingWebsiteDescription = () => {
  const title = "Wedding Website";
  const subtitle =
    "Create unforgettable memories for your special day with the Wedding Website, a beautiful and customizable platform built on the Next.js framework. This website combines the elegance of Tailwind CSS, the type-safety of TypeScript, and the power of Daisy UI to bring you a seamless wedding planning experience.";
  const features = [
    "Personalized wedding details and event schedules.",
    "Interactive RSVP form for guests to confirm attendance.",
    "Gorgeous photo galleries to showcase your journey together.",
  ];
  const technology =
    "Built with Next.js, Tailwind CSS, TypeScript, and Daisy UI components.";
  const content =
    "Make your wedding day unforgettable with the Wedding Website – where elegance meets technology, beautifully crafted with Next.js, Tailwind CSS, TypeScript, and Daisy UI.";

  return (
    <DescriptionLayout
      title={title}
      subtitle={subtitle}
      features={features}
      technology={technology}
      content={content}
    />
  );
};
