import DomeGallery from "../reactbit/Dome";
export default function Gallery() {
  return (
    <>
      <div
        id="gallery"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <div className="absolute inset-0 text-center flex flex-col items-top justify-top z-10 pointer-events-none mt-4">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
            My Gallery
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my cinematography and visual projects
          </p>
        </div>
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
        />
      </div>
    </>
  );
}
