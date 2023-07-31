import { ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface FilterProps {
  regions: string[];
  regionSelected: string;
  handleSelectRegion: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Filter = ({
  regions,
  regionSelected,
  handleSelectRegion
}: FilterProps): React.ReactElement => {

  return (
    <div className='select-container'>
      <select
        className='bg-element w-64 p-4 rounded-md shadow-sm text-text mb-8 lg:my-8'
        name='countries'
        id='countries'
        value={regionSelected}
        onChange={(event) => handleSelectRegion(event)}
      >
        <option value='' defaultValue={''} disabled>Filter by region</option>
        {
          regions &&
          regions?.length > 0 &&
          regions?.map((region) => (
            <option key={uuidv4()} value={region}>{region}</option>
          ))
        }
      </select>
    </div>
  )
}