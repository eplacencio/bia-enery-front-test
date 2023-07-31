import { CloseOutline, SearchOutline } from 'react-ionicons'

export interface SearchInputProps {
  countryName: string;
  handleClearSearch: () => void;
  handleSearchByName: (value: string) => void;
}

export const SearchInput = ({
  countryName,
  handleClearSearch,
  handleSearchByName
}: SearchInputProps): React.ReactElement => {

  return (
    <div className='w-full relative flex items-center my-8 lg:w-96'>
      <span className='absolute pl-5'>
        <SearchOutline
          color='rgb(100 116 139)'
          height='24px'
          width='24px'
        />
      </span>
      <input
        name='search-country'
        className='px-16 py-4 w-full text-input text-base rounded-md bg-element shadow-sm'
        placeholder='Search for a country...'
        onChange={(event) => handleSearchByName(event?.target?.value)}
        value={countryName}
      />
      <span className='cursor-pointer absolute right-0 pr-5'>
        <CloseOutline
          color='rgb(100 116 139)'
          height='24px'
          width='24px'
          onClick={handleClearSearch}
        />
      </span>
    </div>
  )
}