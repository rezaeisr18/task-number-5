import { Box, Typography, IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const CustomIcon = () => (
    <Box sx={{ width: '14.9px', height: '18.19px', position: 'relative', marginRight: '8px' }}>
        {/* First Vector */}
        <Box
            sx={{
                borderRadius: '10px',
                position: 'absolute',
                width: '2.97px',
                height: '15.19px',
                left: '11.93px',
                top: '0px',
                backgroundColor: 'rgba(61, 60, 74, 1)',
            }}
        />
        {/* Second Vector */}
        <Box
            sx={{
                borderRadius: '10px',
                position: 'absolute',
                width: '2.97px',
                height: '10.82px',
                left: '5.97px',
                top: '4.3px',
                backgroundColor: 'rgba(162, 28, 175, 1)',
            }}
        />
        {/* Third Vector */}
        <Box
            sx={{
                borderRadius: '10px',
                position: 'absolute',
                width: '2.97px',
                height: '6.82px',
                top: '8.37px',
                backgroundColor: 'rgba(162, 28, 175, 1)',
            }}
        />
    </Box>
);

const LongTooltip = () => {
    return (
        <Box
            sx={{
                width: '337px',
                height: '775px',
                bgcolor: 'hsla(256, 35%, 19%, 1)',
                borderRadius: '20px',
                boxShadow: '0 1px 2px hsla(0, 0%, 0%, 0.3), 0 2px 6px hsla(0, 0%, 0%, 0.15)',
                position: 'relative',
                padding: '16px 24px',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '12px' }}>
                <Typography variant="h6" sx={{ fontFamily: 'sans-serif', lineHeight: '24px', letterSpacing: '0.1px', fontWeight: 600, fontSize: '18px', color: 'hsla(0, 0%, 92%, 1)' }}>
                    <span style={{ display: 'inline' }}>miglioramento</span>
                    <span style={{ marginLeft: '5px', color: 'rgba(203, 203, 203, 1)', fontSize: '14px', fontWeight: 500 }}>/ Noun</span>
                </Typography>
                <Box>
                    <IconButton sx={{ color: 'hsla(0, 0%, 92%, 1)' }}>
                        <VolumeUpIcon sx={{ width: '32px', height: '32px' }} />
                    </IconButton>
                    <IconButton sx={{ color: 'hsla(0, 0%, 92%, 1)' }}>
                        <BookmarkBorderIcon sx={{ width: '32px', height: '32px' }} />
                    </IconButton>
                </Box>
            </Box>

            {/* Meaning Box */}
            <Box sx={{ marginTop: '20px', borderRadius: '20px', bgcolor: 'hsla(0, 0%, 100%, 0.07)', width: '320px', height: '320px', paddingLeft: '20px', padding: '8px', overflow: 'hidden' }}>
                <Typography variant="subtitle1" sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: '15px', color: 'hsla(245, 5%, 82%, 1)', marginLeft: '20px', paddingBottom: '8px' }}>
                    Meaning
                </Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize: '14px', color: 'hsla(0, 0%, 80%, 1)', paddingLeft: '20px' }}>
                    Betterment . Gain . rising . improvement. <br /> rising . improvement. Betterment . Gain . <br /> rising . improvement.  rising . <br /> improvement. Betterment . Gain . rising . <br /> improvement.  rising . improvement. <br /> Betterment . Gain . rising . improvement. <br />  rising . improvement. Betterment . Gain . <br /> rising . improvement.  rising . <br /> improvement. Betterment . Gain . rising . <br /> improvement.  rising . improvement. <br /> Betterment . Gain . rising . improvement. <br /> rising . improvement. Betterment . Gain . <br /> rising . improvement.  rising
                </Typography>
            </Box>

            {/* Synonym Box */}
            <Box sx={{ marginTop: '20px', borderRadius: '20px', bgcolor: 'hsla(0, 0%, 100%, 0.07)', width: '320px', maxHeight: '180px', paddingLeft: '20px', padding: '8px', overflow: 'hidden' }}>
                <Typography variant="subtitle1" sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: '15px', color: 'hsla(245, 5%, 82%, 1)', marginLeft: '20px', paddingBottom: '8px' }}>
                    Synonym
                </Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize: '14px', color: 'hsla(0, 0%, 80%, 1)', paddingLeft: '20px' }}>
                    Betterment . Gain . rising . improvement. <br />  rising . improvement. Betterment . Gain . <br /> rising . improvement.  rising . <br /> improvement. Betterment . Gain . rising . <br /> improvement.  rising . improvement. <br /> Betterment
                </Typography>
            </Box>

            {/* Opposite Box */}
            <Box sx={{ marginTop: '20px', borderRadius: '20px', bgcolor: 'hsla(0, 0%, 100%, 0.07)', width: '320px', maxHeight: '120px', paddingLeft: '20px', padding: '8px', overflow: 'hidden' }}>
                <Typography variant="subtitle1" sx={{ fontFamily: 'sans-serif', marginLeft: '20px', fontWeight: 700, lineHeight: '20px', fontSize: '14px', letterSpacing: '0.25px', paddingBottom: '8px', color: '#CBCBCB' }}>
                    Opposite
                </Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize: '14px', color: 'hsla(0, 0%, 80%, 1)', paddingLeft: '20px' }}>
                    Betterment . Gain . rising . improvement. <br /> rising . improvement. Betterment . Gain . <br /> rising .
                </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '21px', right: '24px', display: 'flex', alignItems: 'center' }}>
                <CustomIcon />
                <Typography
                    fontWeight={500}
                    fontSize="14px"
                    lineHeight="20px"
                    color="rgba(203, 203, 203, 1)"
                    marginRight='7px'
                >
                    Mid Level
                </Typography>
            </Box>
        </Box>
    );
};

export default LongTooltip;
