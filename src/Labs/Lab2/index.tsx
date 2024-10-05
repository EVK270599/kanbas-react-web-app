import BootstrapForms from './BootstrapForms';
import BootstrapGrids from './BootstrapGrids';
import BootstrapLists from './BootstrapLists';
import BootstrapNavigation from './BootstrapNavigation';
import BootstrapTables from './BootstrapTables';
import Dimensions from './Dimensions'; // Use this component
import Flex from './Flex';
import Float from './Float';
import GridLayout from './GridLayout';
import Position from './Positions'; // Use this component
import ScreenSizeLabel from './ScreenSizeLabel';
import Zindex from './Zindex'; // Use this component
import './index.css';

export default function Lab2() {
  return (
    <div id="wd-lab2" className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <BootstrapNavigation />
      <Float />
      <GridLayout />
      <Flex />
      <Dimensions /> {/* Add this */}
      <Position />   {/* Add this */}
      <Zindex />     {/* Add this */}
      <BootstrapGrids />
      <ScreenSizeLabel />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapForms />
    </div>
  );
}
