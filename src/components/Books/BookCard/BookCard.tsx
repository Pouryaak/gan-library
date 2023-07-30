import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Book } from "../../../interfaces";
import BookPlaceholder from "../../../assets/img/book-placeholder.png";
import { truncate } from "../../../utils";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import BookDetails from "../BookDetails/BookDetails";

interface BookCardProps {
  book: Book;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BookCard = (props: BookCardProps) => {
  const { book } = props;
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <BookDetails
        open={showDetails}
        handleClose={() => setShowDetails(false)}
        book={book}
      />
      <Card sx={{ display: "flex", m: 1, minWidth: "300px", width: "31%" }}>
        <CardMedia
          component="img"
          sx={{ width: 120, height: 195 }}
          image={book.coverImage ?? BookPlaceholder}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Tooltip title={book.title}>
              <Typography component="div" variant="h6">
                {truncate(book.title, 3)}
              </Typography>
            </Tooltip>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {truncate(book.author, 2)}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {book.publishedDate}
            </Typography>
          </CardContent>
          <Stack
            direction="row"
            spacing={1}
            mx={1}
            justifyContent="space-between"
          >
            <Button size="small" onClick={() => setShowDetails(true)}>
              Read more
            </Button>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export default BookCard;
