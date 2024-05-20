import React from 'react'

const Footer = () => {
  return (
<footer className="footer p-4 bottom-0 mt-14 text-warning ">
    <aside className='flex justify-between items-center w-full'>
    <a href="https://github.com/kozmoss" target="_blank" rel="noreferrer" className="text-lg border-none w-36 px-10">
        <span>&lt;/&gt;</span> github
    </a>
    <span className='text-warning'>
        created by{" "}
        <a href="https://github.com/kozmoss" className='text-warning' target="_blank" rel="noreferrer">@sametbuzcu</a>
    </span>
    </aside>

</footer>
  )
}

export default React.memo(Footer)