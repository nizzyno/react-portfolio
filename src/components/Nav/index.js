import React from 'react';

function Nav() {
  const categories = [
    {
      name: 'about',
      description: 'About me section',
    },
    { name: 'portfolio', description: 'Portfolio of my work' },
    { name: 'contact', description: 'My contact information' },
    {
      name: 'resume',
      description: 'My resume of previous work and education history',
    },
  ];

  const handleClick = () => {
    console.log('click handler');
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {' '}
            📸
          </span>{' '}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={'mx-2'}>
            <span onClick={() => handleClick()}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick();
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
