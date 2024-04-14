import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongAlbum = props => {
  const {songDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }
  return (
    <li className="list-item">
      <div className="track-container">
        <div>
          <img src={imageUrl} alt="track" className="track-image" />
        </div>
        <div className="name-genre-container">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p>{duration}</p>
        <button type="delete" data-testid="delete" onClick={onDeleteTrack}>
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}

export default SongAlbum
