

export interface ILabelProps {
  label: string;
  customLabelClass?: string;
  requiredMarker?: boolean;
  htmlFor?: string;
  infoText?: string;
}
export interface CustomModalProps {
  modalTitle?: string | any;
  modalIcon?: any;
  closeModal?: any;
  closeChildModal?: any;

  children?: HTMLElement | any;
  nestedChildren?: HTMLElement | any;

  showModal?: boolean | any;
  showChildModal?: boolean | any;

  modalStyles?: any;
  customWidthContraints?: any;
  childModalStyles?: any;

  hasChildrenModals?: any;
  customModalBg?: any;
}

export interface ActionButtonProps {
  type?: any;
  iconsSize?: number;
  disabled?: boolean;
  title?: string;
  state?: boolean;
  incrementIconColor?: any;
  decrementIconColor?: any;
  iconSize?: string | number;
  color?: string;
  Icon?: any;
  noTitle?: boolean | any;
  clickEvt?: MouseEvent | KeyboardEvent | TouchEvent | any;
  children?: any | HTMLElement | any;
}

export interface IButtonProps {
  loading?: boolean;
  clickEvt?: any;
  customClass?: any;
  disabled?: boolean;
  showIcon?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: number | string;
  iconPosition?: string;
  label?: string;
  customStyle?: any;
  type?: any;
  buttonColor?: string;
  title?: string;
}

export interface IActionButtonProps {
  title?: string;
  clickEvt?: any;
  customClass?: any;
  disabled?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: number | string;
  iconPosition?: string;
  customStyle?: any;
  loading?: boolean;
  buttonColor?: string;
}
export interface ICloseButtonProps {
  title?: string;
  clickEvt?: any;
  customClass?: any;
  disabled?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: number | string;
  customStyle?: any;
  buttonColor?: string;
}


export interface ActionButtonProps {
  type?: any;
  iconsSize?: number;
  disabled?: boolean;
  title?: string;
  state?: boolean;
  incrementIconColor?: any;
  decrementIconColor?: any;
  iconSize?: string | number;
  color?: string;
  Icon?: any;
  noTitle?: boolean | any;
  clickEvt?: MouseEvent | KeyboardEvent | TouchEvent | any;
  children?: any | HTMLElement | any;
}



export interface IMultiRadioProps {
  name: string;
  customLabelClass?: string;
  customformInputStyle?: any;
  radioItems: Array<any>;
  selectedItem: any;
  handleChange: any;
}



export interface IInputProps {
  showIcon?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: string | number;
  showLabel?: boolean;
  label?: string;
  required?: boolean;
  type?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  onChangeVal?: any;
  error?: string;
  customError?: string;
  customformInputStyle?: any;
  customInputClass?: string;
  max?: number;
  min?: number;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  customLabelClass?: string;
  customTextInputClass?: string;
}

export interface ISearchOnInputProps {
  showIcon?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: number;
  showLabel?: boolean;
  label?: string;
  required?: boolean;
  type?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChangeVal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  customError?: string;
  customformInputStyle?: React.CSSProperties;
  min?: number;
  max?: number;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onFocus?: () => void;
  searchResults?: { value: any; label: string; imageURL?: any }[];
  loading?: boolean;
  onSearch?: (query: string) => void;
  showDropdown: boolean;
  setShowDropdown: (visible: boolean) => void;
  onSelectValue?: (selectedValue: any) => void;
}
export interface IPasswordInputProps {
  showPasswordRevealer: boolean;
  readOnly?: boolean;
  value?: any;
  showPassword: boolean;
  togglePassword: Function;
  showIcon?: boolean;
  icon?: any;
  disabled?: boolean;
  iconColor?: string;
  iconSize?: string;
  showLabel?: boolean;
  label?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  onChangeVal?: any;
  error?: string;
  customError?: string;
  customformInputStyle?: any;
}

export interface IRegularSelectProps {
  showIcon?: boolean;
  readOnly?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: "sm" | "lg" | "2x";
  showLabel?: boolean;
  label?: string;
  required?: boolean;
  name: string;
  options: Array<{ label: string; value: string | number }>;
  defaultValue?: string | number;
  value?: string | number;
  onChangeVal: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  customError?: string;
  customformInputStyle?: React.CSSProperties;
  selectInfo?: string;
}

export interface IReactSelectProps {
  label?: string;
  required?: boolean;
  name: string;
  options: Array<{ value: string | number; label: string }>;
  defaultValue?: string | number | { value: string | number; label: string };
  value?: { value: string | number; label: string };
  placeholder?: string;
  isSearchable?: boolean;
  onChange: (value: any) => void;
  error?: string;
  customStyles?: string;
  id?: string;
  customLabelClass?: string;
  customReactSelectClass?: string;
  disabled?: boolean;
  onMenuOpen?: () => void;
  menuPlacement?: "auto" | "top" | "bottom";
  menuPosition?: "absolute" | "fixed";
}

export interface ICurrencySelectProps {
  showLabel: boolean;
  required?: boolean;
  defaultValue?: string | number | { value: string | number; label: string };
  value?: { value: string | number; label: string };
  showPlaceholder: boolean;
  placeholder?: string;
  isSearchable?: boolean;
  onChange: (value: any) => void;
  error?: string;
  customStyles?: string;
  id?: string;
  customWrapperClass?: string;
  customLabelClass?: string;
  customformInputStyle?: any;
  customBorderRadius?: string;
}

export interface IReactSelectOrAltRegularInputProps extends IReactSelectProps {
  // ReactSelect specific values
  selectValue?: { value: string | number; label: string };
  selectDefaultValue?:
    | string
    | number
    | { value: string | number; label: string };

  // AltRegularInput specific values
  inputValue?: string | number;
  inputDefaultValue?: string | number;

  showLabel?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  iconColor?: string;
  iconSize?: number;
  onChangeVal?: any;
  customError?: string;
  customformInputStyle?: React.CSSProperties;
  min?: number;
  max?: number;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: string;
  mode?: "select" | "input";
}

export interface ISelectOrInputProps {
  showIcon?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: string | number;
  showLabel?: boolean;
  label?: string;
  required?: boolean;
  type?: string;
  name: string;
  placeholder?: string;
  selectDefaultValue?:
    | string
    | number
    | { value: string | number; label: string };
  typedefaultValue?: string | number;

  selectValue?: { value: string | number; label: string };
  typeValue?: string | number;

  onChange?: any;
  error?: string;
  customError?: string;
  customformInputStyle?: any;
  max?: number;
  min?: number;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;

  options: Array<{ value: string | number; label: string }>;
  isSearchable?: boolean;
  customStyles?: string;
  id?: string;
  customLabelClass?: string;
  customSelectStyles?: string;
  handleInputMode: () => void;

  mode?: string;
}

export interface IAutoSelectOrInput {
  label?: string;
  required?: boolean;
  id?: string;
  name?: string;
  options: { value: string | number; label: string; country?: any }[]; // Allow optional `country`
  defaultValue?: { value: string | number; label: string; country?: any };
  value?: { value: string | number; label: string; country?: any }; // Allow objects for value
  placeholder?: string;
  isSearchable?: boolean;
  onChange: (value: {
    value: string | number;
    label: string;
    country?: any;
  }) => void;
  error?: string;
  customStyles?: string;
  customLabelClass?: string;
  customReactSelectClass?: string;
}

export interface IMultiDropSelectInterface {
  options: Array<any>;
  selectedValues: Array<any>;
  onSelect: Function | any;
  onRemove: Function | any;
  displayValue: string | undefined;
}



export interface IAltNotificationProps {
  message?: string | any;
  duration?: number;
  position?: string | any;
  style?: any;
  className?: any;
  icon?: any;
  iconThemePColor?: string;
  iconThemeSColor?: string;
}

export interface ICardsProps {
  clickEvt?: any;
  headers?: Array<string>;
  body?: Array<Record<string, any>>;
  size: string;
  customClass?: any;
  customStyles?: any;
  children?: any;
  showEdit?: boolean;
  showDelete?: boolean;
  onEdit?: any;
  onDelete?: any;
}

export interface ILogo {
  size?: string;
  width?: number;
  height?: number;
  customClass?: string;
}

export interface IErrorNotifProps {
  message?: string;
  customClass?: string;
}

export interface IAction {
  label: string;
  callback: (rowData: Record<string, any>) => void;
  className?: string;
  icon?: any;
  color?: string;
}

export interface ITableProps {
  tableMessage?: string;
  showSelector?: boolean;
  showActions?: boolean;
  actions?: IAction[];
  dataKeyMap?: Record<string, string>;
  showPagination?: boolean;
  hiddenColumns?: Array<string>;
  headers: Array<string>;
  body: Array<Record<string, any>>;
  checkedItems?: Array<any>;
  handleCheckedItems?: Function | any;
  paginationProps?: IPaginationProps;
  showToggle?: boolean;
  showMiniMenuToggleIcon?: boolean;
  actionMenuItems?: Array<{
    label: string;
    callback: (rowData: Record<string, any>) => void;
  }>;
  toggleAction?: (rowData: any) => void;
  showLoader?: boolean;
  loadingData?: boolean;
}

export interface IManualTableProps {
  currentData: Array<any>;
  tableMessage?: string;
  showPagination?: boolean;
  paginationProps?: IPaginationProps;
  tableHeaderChildren: any;
  tableBodyChildren: any;
  showLoader?: boolean;
  loadingData?: boolean;
}

export interface ITableMessage {
  customClass?: string;
  message?: string;
}
export interface ITextPill {
  text: string;
  textColor?: string;
  bgColor?: string;
  customClass?: string;
}
export interface IPill {
  chilldren: any;
  customClass?: string;
}

export interface IImageProps {
  selectedImagePreview: any;
  selectedImage: File | undefined;
  setSelectedImage: Function;
  isInvalidImage: boolean;
  setIsInvalidImage: Function;
  fileError: string;
  defaultImage?: string;
  setFileError: Function;
  placeholder?: string;
  customClass?: string;
  customImageSizes?: string;
}
export interface IMultiImageProps {
  selectedImagesPreview?: any;
  selectedImages: Array<File | undefined>;
  setSelectedImages: Function;
  imagesLimit: number;
  invalidImages: boolean;
  setInvalidImages: Function;
  filesError?: string;
  setFilesError: Function;

  defaultImage?: string;
  placeholder?: string;
  altPlaceholder?: string;
  customImageSizes?: string;
}
export interface IMultiFileFormatProps {
  selectedFilesPreview?: any;
  selectedFiles: Array<File | string | undefined>;
  setSelectedFiles: Function;
  filesLimit: number;
  invalidFiles: boolean;
  setInvalidFiles: Function;
  filesError?: string;
  setFilesError: Function;

  defaultImage?: string;
  placeholder?: string;
  altPlaceholder?: string;
  customImageSizes?: string;

  customSpanClass?: string;

  acceptedFormats?: string;
  acceptedFormatsDisplay?: string;
}

export interface DatePickerProps {
  customformInputStyle?: any;
  showLabel: boolean;
  label?: string;
  required?: boolean;
  showWeekNumbers?: any;
  selected?: any;
  name?: string | any;
  startDate?: any;
  endDate?: any;
  readOnly?: boolean;
  onDateChange?: any;
  placehoderText?: string;
  selectsRange?: any;
  showTimeSelect?: any;
  dateFormat?: any;
  timeIntervals?: any;
  minDate?: any;
  maxDate?: any;
  showIcon?: boolean;
  icon?: any;
  iconColor?: string;
  iconSize?: string;
  error?: string;
  customError?: string;
  isClearable?: boolean;
  wrapperClassName?: string;
}

export interface IFrameLocation {
  title: string;
  coordinates: string;
}

export interface IPaginationProps {
  showLimiter?: boolean;
  totalPages: number;
  currentPage: number;
  currentDataLength: number;
  currentDataItems?: Array<Object>;
  totalDataLength: number | any;
  itemsPerPage: number;
  changePageLimit: Function;
  changePage: Function;
}

export interface IValidity {
  issueDate: Date;
  expiryDate: Date;
}
export interface ICommonActionsItem {
  title: string;
  slug: string;
  Icon: any;
  color: string;
  clickEvt: Function | Event | any;
}

export interface ICommonActionsEvents {
  view?: Function | Event | any;
  update?: Function | Event | any;
  delete?: Function | Event | any;
  details?: Function | Event | any;
}

export interface ICommonActionsGroup {
  actionItems?: Array<ICommonActionsItem>;
  actionEvents?: ICommonActionsEvents;
  actionsNotToShow?: Array<string>;
  rowItem?: any;
}

export interface IAutoSelectOrInput {
  label?: string;
  required?: boolean;
  id?: string;
  name?: string;
  options: { value: string | number; label: string; country?: any }[]; // Allow optional `country`
  defaultValue?: { value: string | number; label: string; country?: any };
  value?: { value: string | number; label: string; country?: any }; // Allow objects for value
  placeholder?: string;
  isSearchable?: boolean;
  onChange: (value: {
    value: string | number;
    label: string;
    country?: any;
  }) => void;
  error?: string;
  customStyles?: string;
  customLabelClass?: string;
  customReactSelectClass?: string;
}
