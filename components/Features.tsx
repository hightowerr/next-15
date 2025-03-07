export function Features1() {
    return (
      <section className="w-full pt-2 pb-8 md:pb-12 lg:pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 items-center">
            {/* Feature 1 */}
            <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-bold">Customizable Themes</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Personalize your experience with light, dark, and system-based themes.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-bold">Responsive Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Seamlessly adapts to any device or screen size for optimal viewing.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-bold">Modern Architecture</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Built with the latest technologies for maximum performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }