import React from 'react';

function Flag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.fill || 'currentColor'}
        d="M14.813 6.063c1.23 0 2.566-.422 3.832-.985C19.735 4.621 21 5.43 21 6.625v8.438c0 .597-.316 1.124-.773 1.44-.95.599-2.461 1.372-4.536 1.372-2.39 0-3.972-1.125-5.695-1.125-1.969 0-3.164.422-4.465 1.02v2.918a.578.578 0 01-.562.562h-.563a.555.555 0 01-.562-.563V6.415C3.316 6.133 3 5.57 3 4.938c0-.95.809-1.723 1.793-1.653A1.626 1.626 0 016.34 4.762c0 .035.035.14.035.176 0 .175-.07.421-.105.562a7.451 7.451 0 012.847-.563c2.39 0 3.973 1.125 5.695 1.125zm4.5 9V6.624c-1.125.527-2.989 1.125-4.5 1.125-2.11 0-3.586-1.125-5.696-1.125-1.476 0-2.847.598-3.586 1.125v8.156c1.09-.492 2.953-.844 4.465-.844 2.11 0 3.586 1.126 5.695 1.126 1.477 0 2.848-.563 3.621-1.125z"
      ></path>
    </svg>
  );
}

export default Flag;
