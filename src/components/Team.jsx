import React from "react";

function Team() {
  return (
    <div className="mx-auto px-4 py-4 bg-white rounded-xl" id="Team">
      <h1 className="text-4xl font-bold mb-4">Team</h1>
      
      <p className="text-gray-600 mb-12 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>

      <div className="space-y-8">
        {/* Team Member 1 */}
        <div className="bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-full md:w-48">
            <img 
              src="public\static\assets\Team_Section_Sundar.webp" 
              alt="John Smith" 
              className="w-32 h-32 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-500">Designation here</p>
          </div>
          <div className="flex-grow">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-full md:w-48">
            <img 
              src="public\static\assets\Team_Section_catty.webp" 
              alt="Elina Williams" 
              className="w-32 h-32 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Elina Williams</h3>
            <p className="text-gray-500">Designation here</p>
          </div>
          <div className="flex-grow">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
            </p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-full md:w-48">
            <img 
              src="public/static/assets/Team_Section_oran.webp" 
              alt="John Smith" 
              className="w-32 h-32 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-500">Designation here</p>
          </div>
          <div className="flex-grow">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;