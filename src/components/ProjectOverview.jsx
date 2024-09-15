import React from 'react';

function ProjectOverview() {
  return (
    <div className="mx-6 space-y-6">
      <div className='p-3 rounded-2xl shadow-2xl'>
        <h2 className='text-2xl font-bold'>Electrical1</h2>
        <h3 className="font-bold text-left">Overview</h3>
        <p className="text-gray-500 text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, reprehenderit voluptates minus veniam facilis illum commodi consequuntur aperiam totam fugiat. Asperiores, corporis rerum voluptas, sequi delectus quasi voluptates at dolores molestiae quis repellat inventore cum perspiciatispiditate velit accusantium laudantium dignissimos accusamus dolore est laborum molestias animi ipsum quod. In, iure! Obcaecati cupiditate, debitis laboriosam nihil corrupti ut a labore sint atque?</p>
      </div>
      <div className="flex w-full justify-between rounded-3xl bg-gray-300">
        <button className="w-1/4 border p-4 hover:bg-gray-400">Overview</button>
        <button className="w-1/4 border p-4 hover:bg-gray-400">Guidelines</button>
        <button className="w-1/4 border p-4 hover:bg-gray-400">Timeline</button>
        <button className="w-1/4 border p-4 hover:bg-gray-400">Budget</button>
      </div>
      <div className='p-3 rounded-2xl shadow-inner'>
        <h3 className="font-bold text-left">Description</h3>
        <p className="text-gray-500 text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam in reiciendis voluptatum quasi mollitia veniam iure et sapiente, autem nihil molestiae culpa eaque repellat iste quos, adipisci, voluptas consequuntur veritatis! Cupiditate soluta exercitationem dolorum et alias impedit dicta, odit fugit, reiciendis enim saepe. Accusamus maxime esse, quasi cupiditate asperiores minus?.</p>
      </div>
    </div>
  );
}

export default ProjectOverview;
