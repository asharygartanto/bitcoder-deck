export default function SlideWrapper({ children }) {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 md:py-16 text-lg overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}
