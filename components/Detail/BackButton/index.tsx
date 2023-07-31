import { ArrowBackOutline } from 'react-ionicons'

export interface BackButtonProps {
  onClick: () => void;
}

export const BackButton = ({onClick}: BackButtonProps): React.ReactElement => {
  return (
    <button
      className='flex text-text shadow-md bg-element rounded-md px-8 py-2 items-center'
      onClick={onClick}
    >
      <ArrowBackOutline
        cssClasses={'mr-2'}
        color={'text-text'}
        height='18px'
        width='18px'
      />
      Back
    </button>
  )
}