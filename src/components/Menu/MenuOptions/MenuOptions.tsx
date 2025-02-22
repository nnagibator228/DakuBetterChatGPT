import React from 'react';
import useStore from '@store/store';

import Me from './Me';
import Api from './Api';
import ImportExportChat from '@components/ImportExportChat';
import SettingsMenu from '@components/SettingsMenu';
import CollapseOptions from './CollapseOptions';
import { TotalTokenCostDisplay } from '@components/SettingsMenu/TotalTokenCost';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || undefined;

const MenuOptions = () => {
  const hideMenuOptions = useStore((state) => state.hideMenuOptions);
  const countTotalTokens = useStore((state) => state.countTotalTokens);
  return (
    <>
      <CollapseOptions />
      <div
        className={`${
          hideMenuOptions ? 'max-h-0' : 'max-h-full'
        } overflow-hidden transition-all`}
      >
        {countTotalTokens && <TotalTokenCostDisplay />}
        <ImportExportChat />
        <SettingsMenu />
        <Api />
        <Me />
      </div>
    </>
  );
};

export default MenuOptions;
