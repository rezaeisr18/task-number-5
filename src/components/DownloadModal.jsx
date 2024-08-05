import { Box, Button, Typography } from '@mui/material';
import { Star } from 'phosphor-react'; // Change this to the correct star icon if needed
import { MdCheck } from 'react-icons/md';

const DownloadLayout = () => {
    return (
        <Box
            sx={{
                width: '263px',
                marginRight: '10rem',
                height: '337px',
                borderRadius: '20px',
                border: '1px solid #380C9D',
                background: 'linear-gradient(#391A48, #1C1A26)',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h6" color="white" sx={{ marginBottom: '16px' }}>
                Select the subtitle format
            </Typography>

            {['CSV', 'Excel', 'JSON', 'HTML', 'Anki', 'Text'].map((format) => (
                <Box
                    key={format}
                    sx={{
                        width: '245px',
                        height: '35px',
                        border: '1px solid #2C2538',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 24px',
                        gap: '4px',
                        backgroundColor: format === 'Text' ? 'rgba(45, 29, 81, 1)' : 'transparent',
                    }}
                >
                    <Typography color="white">{format}</Typography>
                    {format === 'Text' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography fontSize={'12px'} color="#48C1E8">(Free)</Typography>
                            <MdCheck size={18} color="#48C1E8" fontWeight={'bold'} style={{ marginLeft: '4px' }} />
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography fontSize={'12px'} color="#ED2481">Premium</Typography>
                            <Star size={16} weight="fill" color=" #ED2481" style={{ marginLeft: '4px' }} />
                        </Box>
                    )}
                </Box>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', margin: '10px' }}>
                <Button
                    variant="outlined"
                    sx={{
                        width: '73px',
                        height: '40px',
                        borderRadius: '20px',
                        border: '1px solid #380C9D',
                        padding: '10px 16px',
                        backgroundColor: '#1B1B21',
                        color: 'white',
                        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                        textTransform: 'none',
                        cursor: 'default',
                        '&:hover': {
                            backgroundColor: '#1B1B21',
                            border: '1px solid #380C9D',
                            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                        },
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        width: '150px',
                        height: '40px',
                        borderRadius: '20px',
                        border: '1px solid #380C9D',
                        padding: '10px 16px',
                        backgroundColor: 'rgba(196, 27, 211, 1)',
                        color: 'white',
                        boxShadow: '0px 1px 4px rgba(148, 19, 206, 1)',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: 'rgba(196, 27, 211, 1)',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Download
                </Button>
            </Box>
        </Box>
    );
};

export default DownloadLayout;
