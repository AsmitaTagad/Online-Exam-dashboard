import React from 'react';
import h from './Home.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate} from 'react-router-dom';
// import SignUp from '../../component/signUp/SignUp';

export default function Home() {
  const nav = useNavigate();
  function handleNavAdmin() {
    nav('/AdminReg');
  }

  function handleNavExam() {
    nav('/RegisterStu');
  }
  return (
    <div className={h.main}>
      <div className={h.head}>
        <h1>
          <i>Examination Portal</i>
        </h1>
      </div>
      <div className={h.sub}>
        <div className={h.card}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://www.shutterstock.com/image-photo/technology-concept-admin-260nw-404758537.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Admin Section
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleNavAdmin}>
               Admin Dashboard
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className={h.card}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGl-Hkxd65snT0_nMLikB8xW10AqJcA6_Rtw&usqp=CAU"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Student Section
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handleNavExam}
              >
                Exam Hall
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
