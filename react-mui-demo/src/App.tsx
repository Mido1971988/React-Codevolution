import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import { MuiTypography } from './components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckBox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';
import { MuiAutocomplete } from './components/MuiAutoComplete';
import { MuiLayout } from './components/MuiLayout';
import { MuiCard } from './components/MuiCard';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiImageList } from './components/MuiImageList';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiLink } from './components/MuiLink';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiBadge } from './components/MuiBadge';
import { MuiList } from './components/MuiList';
import { MuiChip } from './components/MuiChip';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiAlert } from './components/MuiAlert';
import { MuiTable } from './components/MuiTable';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiDialog } from './components/MuiDialog';
import { MuiProgress } from './components/MuiProgress';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiDateTimePicker } from './components/MuiDateTimePicker';
import { MuiDateRangePicker } from './components/MuiDateRangePicker';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* <MuiTypography/> */}
        {/* <MuiButton/> */}
        {/* <MuiTextField/> */}
        {/* <MuiSelect/> */}
        {/* <MuiRadioButton/> */}
        {/* <MuiCheckbox/> */}
        {/* <MuiSwitch/> */}
        {/* <MuiRating/> */}
        {/* <MuiAutocomplete/> */}
        {/* <MuiLayout/> */}
        {/* <MuiCard/> */}
        {/* <MuiAccordion/> */}
        {/* <MuiImageList/> */}
        {/* <MuiNavbar/> */}
        {/* <MuiLink/> */}
        {/* <MuiBreadcrumbs/> */}
        {/* <MuiDrawer/> */}
        {/* <MuiSpeedDial/> */}
        {/* <MuiBottomNavigation/> */}
        {/* <MuiBadge/> */}
        {/* <MuiList/> */}
        {/* <MuiChip/> */}
        {/* <MuiTooltip/> */}
        {/* <MuiTable/> */}
        {/* <MuiAlert/> */}
        {/* <MuiSnackbar/> */}
        {/* <MuiDialog/> */}
        {/* <MuiProgress/> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiLoadingButton/> */}
        {/* <MuiDateTimePicker/> */}
        <MuiDateRangePicker/>
      </div>
    </LocalizationProvider>
  );
}

export default App;
