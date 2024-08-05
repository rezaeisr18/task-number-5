import { Box, Button, Typography } from '@mui/material';
import { VolumeUp, BookmarkBorder } from '@mui/icons-material';

const CustomIcon = () => (
    <Box sx={{ width: '14.9px', height: '18.19px', display: 'flex', alignItems: 'flex-end' }}>
        {/* First Vector */}
        <Box
            sx={{
                borderRadius: '10px',
                width: '2.97px',
                height: '15.19px',
                backgroundColor: 'rgba(61, 60, 74, 1)',
                marginLeft: '11.93px',
            }}
        />
        {/* Second Vector */}
        <Box
            sx={{
                borderRadius: '10px',
                width: '2.97px',
                height: '10.82px',
                backgroundColor: 'rgba(162, 28, 175, 1)',
                marginLeft: '5.97px',
                marginBottom: '4.3px',
            }}
        />
        {/* Third Vector */}
        <Box
            sx={{
                borderRadius: '10px',
                width: '2.97px',
                height: '6.82px',
                backgroundColor: 'rgba(162, 28, 175, 1)',
            }}
        />
    </Box>
);

const ShortTooltip = () => {
    return (
        <Box
            sx={{
                width: '346px',
                height: '181px',
                borderRadius: '20px',
                backgroundColor: 'rgba(35, 31, 47, 1)',
                boxShadow: `
                    0px 1px 2px rgba(0, 0, 0, 0.3),
                    0px 2px 6px rgba(0, 0, 0, 0.15)
                `,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        fontSize="18px"
                        lineHeight="24px"
                        color="rgba(203, 203, 203, 1)"
                        sx={{ marginRight: '8px' }}
                    >
                        Miglioramento
                    </Typography>
                    <Typography
                        fontFamily="sans-serif"
                        fontWeight={500}
                        fontSize="14px"
                        lineHeight="20px"
                        letterSpacing="0.1px"
                        color="rgba(203, 203, 203, 1)"
                        sx={{
                            width: '53px',
                            height: '20px',
                        }}
                    >
                        / Noun
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VolumeUp sx={{ width: '32px', height: '32px', color: 'rgba(234, 234, 234, 1)', marginLeft: '8px' }} />
                    <BookmarkBorder sx={{ width: '32px', height: '32px', color: 'rgba(234, 234, 234, 1)', marginLeft: '8px' }} />
                </Box>
            </Box>

            <Typography
                fontWeight={400}
                fontSize="14px"
                lineHeight="20px"
                letterSpacing={'0.25px'}
                fontFamily='sans-serif'
                color="rgba(203, 203, 203, 1)"
                sx={{ marginBottom: '16px' }}
            >
                Betterment . Gain . rising . improvement. <br /> rising . improvement.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                    variant="outlined"
                    sx={{
                        width: '98px',
                        height: '32px',
                        borderRadius: '20px',
                        border: '1px solid rgba(97, 87, 200, 1)',
                        padding: '4px 8px',
                        justifyContent: 'space-between',
                        '&:hover': {
                            border: '1px solid rgba(97, 87, 200, 1)',
                            backgroundColor: 'transparent',
                            color: 'rgba(97, 87, 200, 1)',
                        },
                    }}
                >
                    <Typography
                        fontFamily="sans-serif"
                        fontWeight={700}
                        fontSize="14px"
                        lineHeight="24px"
                        letterSpacing="0.1px"
                        color="rgba(97, 87, 200, 1)"
                        textTransform='none'
                    >
                        Show More
                    </Typography>
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CustomIcon />
                    <Typography
                        fontWeight={500}
                        fontSize="14px"
                        lineHeight="20px"
                        color="rgba(203, 203, 203, 1)"
                    >
                        Mid Level
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ShortTooltip;
