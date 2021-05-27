import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, selectMessage } from '../redux/messageSlice';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function MessageBox() {
  const { message } = useSelector(selectMessage);
  const [ messageData, setMessageData ] = useState({
    content: '',
    variant: ''
  })
  const dispatch = useDispatch();
  useEffect(() => {
    // setMessageData({
    //   content: message.content,
    //   variant: message.variant
    // });
    setTimeout(() => {
      dispatch(reset());
    }, 5000);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: '900px',
        left: '37vw',
        height: '80px',
        width: 'auto',
        padding: '15px 30px',
        backgroundColor: message.variant,
        borderRadius: '12px',
        color: '#fff',
        zIndex: 10,
        fontSize: '36',
      }}
      // className={`alert alert-${message.variant || 'success'}`}
      // className='alert alert-success'
    >
      <p style={{ marginRight: '30px' }}>{message.content}</p>
      <IconButton
        aria-label='Close Message'
        size='md'
        variant='ghost'
        isRound
        icon={
          <CloseIcon
            onClick={() => {
              dispatch(reset());
            }}
          />
        }
      />
    </div>
  );
}
