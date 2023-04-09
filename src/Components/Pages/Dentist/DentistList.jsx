import React from 'react'
import {
    Button, Card,
    CardActions, CardContent, CardHeader,
    CardMedia, IconButton, Typography,} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const DentistList = () => {
    return (
        <div>
            {users.map((user) => {
                return (
            <Card sx={{ maxWidth: 345 }} key={user.id}>
                <CardHeader
                title={user.name}
                />
                <CardMedia
                component="img"
                height="194"
                image={
                    "https://res.cloudinary.com/dah7pc8j0/image/upload/v1680872533/846989_1_dti58l.png"
                }
                alt="Dentist picture"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() =>
                    dispatch({ type: "HANDLE_FAVORITE", payload: dentist })
                    }
                >
                    <FavoriteIcon
                    color={
                        favs.some((fav) => fav.id === dentist.id)
                        ? "error"
                        : "disabled"
                    }
                    />
                </IconButton>
                <Link to={`/dentist/${dentist.id}`}>
                    <Button variant="contained">Ver detalle</Button>
                </Link>
                </CardActions>
            </Card>
        );
        })}
    </div>
    )
}

export default DentistList