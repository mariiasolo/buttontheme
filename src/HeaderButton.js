import React from 'react';
import ThemeContext from './ThemeContext';


function HeaderButton() {
  const themeColor = React.useContext(ThemeContext);
  return (
    <div>
      <button style = {themeColor}> Press me </button>
    </div>
  );
}

export default HeaderButton;
