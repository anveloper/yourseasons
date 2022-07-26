import React, { useState } from "react";

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';

import ConsultingReview from "./ConsultingReview";
import ConsultingResHistory from "./ConsultingResHistory";

const ConsultantMyPageTab = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="상담 예약 기록" value="1" />
            <Tab label="사용자 후기" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ConsultingResHistory />
        </TabPanel>
        <TabPanel value="2">
          <ConsultingReview />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default ConsultantMyPageTab