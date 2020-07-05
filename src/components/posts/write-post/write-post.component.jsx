import React from "react";
import { Box, Grid } from "components/shared/form/layout";
import { String, Button, ButtonLink } from "components/shared/form";
import { Theme } from "components/shared/form/theme";

const WritePost = () => (
  <Box background={Theme.PrimaryGreyLight} pad="10px" radius="large">
    <Grid default="1fr 1fr">
      <Box leftAlign>
        <String size="1.8rem">Have a question of your own?</String>
      </Box>
      <Box rightAlign>
        <ButtonLink to="/posts/create">
          <Button>Write a post</Button>
        </ButtonLink>
      </Box>
    </Grid>
  </Box>
);

export default WritePost;
