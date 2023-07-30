import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { Book } from "../../../interfaces";
import Typography from "@mui/material/Typography";

interface BookDetailsProps {
  open: boolean;
  handleClose: () => void;
  book: Book;
}

const BookDetails = ({ open, handleClose, book }: BookDetailsProps) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Book Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img src={book.coverImage} alt="" />
            </Grid>
            <Grid item xs={10}>
              <Typography component="div" variant="h5">
                {book.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {book.author} (Author)
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {book.publishedDate} (Published Date)
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {book.pages} (Pages)
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                color="text.secondary"
              >
                {book.rating} (Rating / out of 5)
              </Typography>
              <Typography variant="subtitle1" component="div">
                {book.description}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookDetails;
