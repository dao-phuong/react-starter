import React from 'react';

import './styles.scss';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadData: false,
      listRoom: [
      ]
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    // api call
    // const result = await fetch('');
    this.setState(state => {
      return {
        ...state,
        isLoadData: true, 
        listRoom: [{
          id: 1,
          type: 'VIP',
          hotelName: 'lsfs'
        }]
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { isLoadData, listRoom } = this.state;

    return (
      <div>
        {
          isLoadData ? (
            <div>
              {
                listRoom.map((room) => (
                  <p key={room.id}>
                    <span>
                      { room.hotelName }
                    </span>
                    <span> { room.type } </span>
                  </p>
                ))
              }
            </div>
          ) : (
            <p>Loading</p>
          )
        }
      </div>
    )
  }
}

export default Booking;