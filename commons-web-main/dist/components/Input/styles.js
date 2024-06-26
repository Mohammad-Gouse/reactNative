export default (props) => {
    return {
        height: '48px',
        width: '100%',
        border: props.isError ? '2px solid #CD371D' : '0px',
        paddingLeft: '10px',
        borderRadius: '5px',
        backgroundColor: '#f7f8f8',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        lineHeight: '19px',
        '::WebkitInputPlaceholder': {
            color: '#b0bec5',
        },
    };
};
