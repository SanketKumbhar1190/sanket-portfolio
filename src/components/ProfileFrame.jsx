// export default function ProfileFrame() {
//   return (
//     <div className="flex justify-center md:justify-start">
//       <img
//         src="/profile.png"
//         alt="Sanket Kumbhar"
//         className="
//           w-60 h-73 md:w-70 md:h-78
//           rounded-full
//           object-cover
//           shadow-lg
//           shadow-black/90
//           dark:shadow-black/60
//           shadow-offset-y-4
//         "
//       />
//     </div>
//   );
// }
export default function ProfileFrame() {
  return (
    <div className="relative flex justify-center md:justify-start">
      {/* Photo */}
      <img
        src="/profile.png"
        alt="Sanket Kumbhar"
        className="
          w-60 h-73 md:w-70 md:h-78
          rounded-full
          object-cover
          relative
          z-10
        "
      />

       {/* Strong floating shadow */}
      <div
        className="
          absolute
          top-full
          mt-4
          w-40 h-7 md:w-44 md:h-8
          bg-black/90
          dark:bg-black/90
          blur-2xl
          rounded-full
        "
      />
    </div>
  );
}

