import React from "react";

const NameTitle = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <p
      className={`h2-bold font-space-grotesk text-dark-100 dark:text-light-900 ${
        isMobile ? "" : "max-sm:hidden"
      }`}
    >
      MioPetit <span className="text-primary-500">Social</span>
    </p>
  );
};

export default NameTitle;
