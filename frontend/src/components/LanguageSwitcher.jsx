import React from 'react';
import i18n from 'i18next';

export default function LanguageSwitcher(){
  return (
    <div className="language-switcher">
      <button className="btn btn-link" onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button className="btn btn-link" onClick={() => i18n.changeLanguage('ta')}>தமிழ்</button>
    </div>
  );
}
