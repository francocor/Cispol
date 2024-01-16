import Footer from "../components/Footer"
import Header from "../components/Header"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import jpa from "../assets/jpa.jpg"
import maProgramacion from "../assets/m.a.programacion.jpg";
import "../CSS/Sponsors.css"

const Sponsors = () => {
  return (
    <div>
<header>
<Header />
</header>
      <main>
      <br /><br />
      
      <h3>Agradecemos a nuestros sponsors oficiales por confiar en nosotros.</h3>
    
      <div className="card-container">
        <Card className="card">
          <Card.Img variant="top" src={jpa} style={{ width: "250px" }} />
          <Card.Body>
            <Card.Title>Juventud Peronista Alderetes</Card.Title>
            <Card.Text>
              Agrupación destinada a los jóvenes de Alderetes con fines politicos.
            </Card.Text>
            <a
              href={"https://www.instagram.com/juventud.peronista.alderetes/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Instagram</Button>
            </a>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img
            variant="top"
            src={maProgramacion}
            style={{ width: "250px" }}
          />
          <Card.Body>
            <Card.Title>M.A Programación</Card.Title>
            <Card.Text>
             Empresa dedicada al desarrollo profesional de software y páginas web.
            </Card.Text>
            <a
              href={"https://www.instagram.com/m.a.programacion.tuc/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Instagram</Button>
            </a>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img
            variant="top"
            src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAD1CAMAAAAvfDqYAAAAwFBMVEX///8Am8oAAAAAl8gAmckAmMkAlcebm5vf39/29vZIstaXl5e64e+UlJQAncsAk8bR0dHm5uZwcHCHh4d9fX0aGhpCQkKtra3v7++kpKRcXFwMDAxISEgfHx+/v7+f1OhmZmbz+/0+Pj7KysqysrLg8vg2Njb19fXM6fNfX1/FxcXY7vZpaWmLi4szqdGKy+Oy3OxSUlIqKipywd6Uz+V/xuBdudrE5PCm1ul3wd12dnYvLy9Ntddnudnp+Pue0OWYvqG2AAAYFUlEQVR4nO1da0PiOhMGk0bA2noXvKBVQRQtIMrFVfb//6u3mZncSlE4uwXPeTsfVghtmidzycxk0i2VCiqooIIKKqigggoqqKCCCirov0rD+LW16TH8RZoIFgaffrTpcfwRRbNWx/fhkyiXuSd4/Lu76UGtRBLB2Pd/Tz/iICiXPY8xABDzsiTOvGA4nm16lEtTiydcYELw5C8HCOK3bO+xMhHnrBz3O7Ixet3sYJegiSi7xD9k85jZTZyFkkOzIP7xBuKTpeAE0BxwpzWUba2AB/2NDvZ7imKewjOWzR+e0wgYu2Ve9t5+qrnzcaY7KXFjPdn622lFCexI4Kz2IwXOr7EyKHjpNXS5E8vGbgbEsUBp/HkC16+xRHBiFJxaStygNbZbxEQ2XRHHvLcNjnyeon5NAAI2hO+zsoOHwewP+Rwc3SR+kMBFk1hwZ+Ql31UUAOnbFk+Ar2C4yIPxBhFYZIORhE7Mm2OtwYxFtqkWoGW2/IneBkEoiq5cMIn64A+OtRaA0daoUApX5KpTbdMWO3oNUmumVp+uzQt2JZt61rWhHPrMXVpZbZNYEm0IXItMowK1KF1Zg/dGsqVjc0c2tFw4KICtzfHIn2eOJHSYbWeHyQZbtjKWIo7MqW3SLZ2K1BJT1upjOzsh+jm6Adk1du4NgTljEWzSZnfjeUBsCj91zOrDYMr7ml/oFDjmnJjz4bHRprAAXfE5PMiM0qtwx2p0BW3Dqy2qxByu1641U6QWvtloziIEqD4jPd4Q/RwNx3UKDHPAmAebsAajcKSCZD9OOdE0OGOJBfo5Ch5LOQWKOR3PEta1UjI0HlzRl+iNuRIn0D6NVZCDytLRcICzlqWzmZN866wbDXoxrKYSM52aaxIYjkgvneDnaG6xtFOAfkOH0PN4zeKmhumVlasVXTmLEI9REpVAhY6fI+COIGW4jfSx9S4+ZsnnLFaS0fq0GcQ+sTEgAHaAg+mDlmXIAawWzTLn61x8+ramcD5VouHH1g8CFatPCEC9u6QbsNB29KXEHGvd5Wv03/yU3rPAp19mUzPjnELtKUbQXGImdSGnQLPYgyt9u9f1LT5jb94P0Da7axhECk3ODlriT7TEoHB9Zd3nmSMnY03WoDMHBhg0oZ+ToEErNMUKAB+1G/0a/KytHtpl33Vn6ea8qRtkwZHRl7LZrQ+9vCDGK+k1kJ8DwojtI2WW0Wik03PhOhaf1gI0icjwnpKPvrLZAUIEZ8eT8oiSh06BysLjRX7KsfCCNew1zGI3mWkTF7Fy46Ih+qWUqYqktcZsByy/np0pIKlKMUetW7lSFIfz/rMNSGdox2gSBGbQZH6QwUfwczgMNbCZM3bdWLYWv6A16X0EnLF526aGYTKavUAy0sPvbwmeWOUHOIepCezUnMsc9oFooqv0CHLA1H8dBWwBJi5GakFvycRomYLLREg9+DTi5MC14HZeztAcgcahFNXWZa5b/u/PIGQZsTX3tMM1KbOyp2IFChISPweNHLo0WcxhlOOdxSxc597jzJ9Mg1AId8VITIIaRDQMlfr4woM57zLKisIqysvAsn5o307T0UqkVaxB2lyKOpNeIEJmeT5c6ABsHAg0aYn6BOTnWDskGcwRpH0d2SHLNRkfvfWzuZ9geou5YLQfmpgEbbN7IYXaMQY1U45OgTTZHDWrbzRHJ6t9kGNaYnOiSci8IB72u5kaGnX7b3FZbvPKef00bhxmqlocXTVmnAIKow1z9OJ5RVqZa95AmqVksKIcxKN+J3Ohi1r9t1rABBPajStdocj0AVaL6UwBR74Z5jC19dtTopunLehau+me4IApM86KZv1pLQi1SaBM7RAurjHlFCBzTH5R1GiGhiYjN0n3/ffoLWXCyoDpI8GUJRJR5E/dXZsZjPbVg6sDnmYOG9HiaeWDc7QF7gaGxsSZxDTpZCvUPI3BKSipoWrmsCF2MKvZ2fr8bEE/XQFhYxKJjRi9jpfAFKEKeWWXObQ+SWfC7jo/52202JtWfGLleNTzu197w2Cnxwz324g5XC2Y3ZRrzfKyBd2v0RAmzkQYBqOrLxARU5A5E+SFUvlxkHqKyCtp0MvczHGgeEx4cW24jMy9hsQcZCwlT/xy2glkOe2ZZhoCiynSIIx6/c6Ssj5E+wYVSTygQHoyP2N52YIFhiCx1izR6trbZLxSqq9mmOOp9anHMmKOnGzBvCGQLJH+wcRf1kZbFGvN0XH0MGPCEhckF1vQtaVaGmaesOTVz/Z0liAwZJI5TG3Aj+bRcFYejnPhjjIEHPzmYNpfKFuRv+AH9yr5T8IcQa5AKU7rTcL7uJ9TAiSZR2mDE33/WCxbUXcyrZU/lh5CFHCVHZyvghPlt/zcz36YrJBvC7zokgxMX0cxD0UYrJDtmwhlhtPpOybiXKuU/YXltVGnP00iN5HYtyR2WGVjJgoELZ5dO93FvTB4tZ8Wraf+Our6v2Vok1gFHI0YrSTqr6FaPC0jkDi0I4fBnamI/96Ys6k17k8DjyVrp9kASeRjpT4ivXiGZt+KxU6yozUJBM8zYTDrJCyBivWU6pZ7K4rEq1o89cZIGLzZ5jLya540dzm5bV1/Moyl/cxI7IYfOhm1LCq6bkrbc4KNnGF33gJyEngepXv9IJEuPuciotKYXO5kNcmIYPHkPIwd7W9dxVx5PDyXKp2rjIyn0hqdae9+rOZiRTJW4yJwovCoPwps7y0XS3C1IBbloqYsUdQrr7bl3EpcAcZGE5sxnbfYTX97udQcLYDDdOmHrGXhKxm3bixE3LPN8uyqxtPOTj5FBplwuDfUGwbDxAtaKdZKIs+RvUJG488gQ6LZavZ/ScqAw5nebyvJoo/VqgH67gGy1lssMvfC8qnQmYfjBa9qbjs1saoJmtmef9Sv8azYTaIJcvGq03C4pzemcCuU0/qw8qIXdTOFTD0nnwIQF04iZ1qkaaOa9mX8FavRZq/xAr7Qk/IpMHDgeFwvNa0a/kA1nLPyKqIe+SO+mDFAOe1Y2XBMTUTUY5hD0BVfwfJddt++EDL9rHxOJxg4pmJFbq6RSHhUjxcuu+jNJrH4LnMHPedTC6bgcDHUcmaKWkMUCV8suUr4n6HcVGVJtPQN5ZSYQjhJVKN148r4IqQ48mweyNx3trU17hD531A/p5MwAIcbj2NsFYRzVdju4afZzz8QKgsCTK1x4thbO9WU5h8KKpKc/ITDOF/TFRO2S2NbpBBXzolQRRzDn3WYLYuuQuPSuAcPqOYE8qQodWIDhd0rUseUcrieIrdOhGAWsIPWepZpk8YfsaHaEpRv4Uc/dWhHFQl/mkq1CaaSOtneW9QZlkNZULEc5XoApvuRXvoozwLHPchMxx7WRLmn2awvyRLKlllCy7n5ODii3vzuGKrJGH5A73cW4mGwGRaktMiH6E/tnHN3GmSHNy7xPA/4zR+m4s5RKqwm6otyiIWfuKJPfxOecuxb62vk18rfsiiXpJSi8VwIR5I9wu1nrKgZcqo9ifEkSDekVXVcDoOhvf3QSqc50pRz+XG6ANVDD43OUSGrokSG6NQuQ94NQ1pWO0FiAuKJpdyR//GVV51PJKrp1WUPpToU0+iUjlAnKEYeJ/aEtK7KqgEugk87sG71FrKI5VydFznaqw5R6e9gpqWNQ3uULFB4xScPyQ2XmTW5g+emPfxRJot47lsH9oavWhL0sRuM4GA5BT71GKlyJ9SbhlRxw4VwXpuThNh8ztCx3AvdLWPAKUdodgDA2WnJ4eIeRuLEeer8pN7SjdSWrhcGPdt0j4eBmzRYxzEEUyyhUh06hCMzDd4BrEZSi1AAZTU4Uxvupr5LJnRtFl0lEYaJOtZxQlGXsuhUhz7gglW3cKYFdUZW8Rj2ZBYQyHS7LVKdt7JikcixMk9TpGJsGps5lIAQqHgdi7wkVI8OH1vKVurZhcYsjO1oL+rXQokofzsARIpPajo16zoKH72HBUrw4CSi94G3AdNUgvbKOXLAhTeyV//ub094a6oIx8MPoXOyDeHAUKnAMjRnw5jWHqlUenfXNWOeCHr2kjmurec4Er6PSKDiOJUtMSLAFphb/ELaA+xJREsVrs2V+DBWy2Wv4BuSq4k61maNCW3zjFow2YeCSccoaaNTJU868/uSiV3IsdJjAc0Sx55SHfMvV1HZODxZiJ6pe8hV76t304WF8CPPrQ5nEdVCFBinmI7jSyRGysqCbuFBRDqCbA5gUyZhNldVhIgSr3udcHycbVda0CXQB4/NOYM59pjlflbLjHe49LrXx6LIPg+qZQ3YoV+XhU6bEj14j4yl/cqBizJq2ABQuPa3zKTewxaqyI0GBAKlPDyePteiXooTpd/mZk/GOil1GpZcAj1gDvLVUpMvbOMGA1YOzzRjyzXYgMGeOP48zmfLNIEp19/JmsU2HuXwpPGYzaO1khOZ4ttKrJeVwCE8U3UnYPC+ZZp1fe5rKiyYrlttiKw6cXLmrbd30GuX9CDd4xN4jyoAs0JrHqzDj84ms4x6oOv2S6PIyzEihOxxlyrlwJl9onjtr/mwSNslNNN+2iG1uMHsAxQakDq2h3rI2Wrlin+d1DooYBiflmrMvVCOp0/tyUaPUjWoZGLTu1wRjjdtpssqlvy0TFkme8whUe79gDfooVONQ+3aioFejvWiInLq+ql1Ux/h/RlvcAUvDSM350QMIrRfI5XJnuReVRi+KQQuzdSZcPf9mRxm3VYV2i2Ze+nuhl/5laaWQA/ZrVTH87gtOycgrANIDn82/lZDh7q41etOOwasLTtCo7V2jj1retnC0oQJdNfZx7G3nJgIzdgce2RqaqPjzyS/Ftq8YBkvl0T22MVK3BOi1tukK7CY/JEFCLyamcsJMm7GkxPl4dVPsM8LaGxem0VejitXsWEPFyJ++/Hv3u8MaU+aWakpwx7UnoAxXntd9hDjZqk7hCpVTE198kz2fPZ/sIilqTUNGHljn/jO/RR7/m3Uegtwe3dSq8Xyf0RIDBgUeng/a4lZmmZvqmoqms1arW7Xfx2O4gTa5qLNP6Ps94HM/j3/RUVBBRVUUEEFFVRQQQUVVFBBBRVUUEEF/Sntb7+fnV0fnd7rltOni5PB0Z76+rh9+H5wcHDUoCv2d3d2T5O/e7s7inbrpVKlsXv0dPB0tEs31pOfd/fx8/32zu6d7u99cHLxrr+qhzzDQ3ZudVPT9L+zLJjTyy1FNIyG+t6u4Oj1BVsXddmwl3wa2BcmlFz6ZL7BUCvy0xNBO9cfb4/povOmPadWXwd1bHu32pYDU7+Zu+XAagGA+8dWyz7BOZuHY9/4rODQHNWTSTvA6bOu2rbgnFvtOB2lo1Xh1PHak6Oj9xOY8FLpUDYMTu+O9OglnF+Pe7c7suEmBefy5EZSex/hPDebjUtCgXAGLpymbLts3O1aw1ZwLrdPT3fb5gc5hDZ0f3OxFBy497kKn6takLZO9XxdEJwTaJG/3btwLKE+ULwYbMHYEc7Wow0H5u8dHieveqnbcHDMlRc1j0eaucvRtrzx1mk6SVoO8eMeCRHAqaoBN104uxlw5O/JDQTnxIazSwymJiNuAIfmVf7w8A/gyPlvOC1yCJdqyq5xJg2cQ+z/Ozil5Ib2PfT1gBOg4FRfrPlrbCmGuHBKj3IWqivDkbddVp0m+Ygn+/cXG84l6uR3cKrnoDISzl0izpcGzq2t1RXi/hwcOR1S4FeEIyf7yG0aOPzCh0s4oEPX9KMNxzJOGs4O6hTAaeDICM6288QBsW4OzjNK/IpwzhzbAnRsTRgKYx3gHD88DI6V5ttw2tcPCZ3tEBx5rzTFx3WEcwp93Cs4h8rOAD1Z3xw4pyjlEs7gAfpPDTOT2mrslcHg7OxscKEAKLqEC6x1B41ExrpzQHAG19fSmJxL/agA83bhX6k0BzhAM7JDSxQcOHdb+moiS6a/h7NHN6F4fQFn62LBMvpUspfRAbg2FeBmVTbc/ymc5yXhaMuKcOa5sw9w2rd7t41fUopS6871qaTGowOnfWvggL5sl35lwHlfQtiesf9lVOhMdXf/+PjYBjiXjvYhRL2M1i9Qk79YRk/3bsHT2jdwQB/v2wDnecu2NNcWuDlT8PyPLNuB+nIBQ7+2GVu34MCTYFX61lC/bxmfTcKRc313AY9q0J1AEqJehBw4clKbK8Np2pqCcO7s50kxGdhwqojvGzhyFn7dK1OQUCJoFyhsINUqEJGL0Iv6YsOp4GNW9grkbYcOHHDLVBcvKIwGTn0pOKUblDbFHZi2YxSEC0tdDrbIfUvDuSCpWRUOuLUNG05JeiXU7S5NkoEjx3/zPZx3lBUNBxxBHGFDKRbJhnYYLTiH6ppV4cD8bz3sVSnwKRGjB4n5vtdYlSmoQqiy48I5qiDVLThkmAycPQ2nKvUFVqVT1eTCuW+ebKn7wA6a/r8nJzJDbwrDq2MMOx7URefX7wNoaZeyw7dDC47EQR41Gb4zPXZaE5BfbRPPQzhyfExBHDpCdvjmesqLCGyvA8ce5PUc5hM1pDScZ9ujfgFpseBUDCturc6sKXeiUbLeq8NJRPiMbjh/Ih2tUMsJuYcmjL9u6hFJn3TbetwRGnmE8w7Pr2wZoy/dswf8WKUUwItx3ko6LpaX6XY7Wt8uLU37j3dNR+WqzUbjzoocKnuPd7crKeXXdJt0vz83ir3bu8e/+JCCCiqooIIKyqbmnSRrB+NfTZQtXSa78W+g9n8KzY5yYf8TtKc82P8GVR5vE/oLHVV3t9O0c1uqNuCTii8qO9Bese6rNJ4Pzs7O3g8bsrUJF2zX7T53IJCo76hu6cY9atgxfvP+7nZD0rYVLaTuutvBgX1H9nakol3YxdzCqFNSE9vN007tgO8ZkwtbOrFd19GPHahRMKDjFxO8POtrdDxSVS0UxD0saSlMxOTAwa3fk2w4e7+cy+8waJuDc+jCwaivru81cK71NXrCNBza1nrKD85p6vL6V3DurF5hKvT394wh6F0lDYcC6vzgpNFclr6CY1IJv+A3E4tfqyFYHR4raTNwflVXgZOlO89fwTHTu9V+GFzijC6GY/QCU60D/XWghoDJDdRWpewGDgrlsnBKe5IqN9hlE77tfwVHyX67CdN2DwmGxXDezVjlBkPFjPwXdQ5Z6mRqoFEtPRYc2KVdGg4SWqpzlYpYDEfpwoFz+2I4YMjOYQ7kmg8buPiwSzWfyAMUOZXSteAAe/4ZHLWyLIZDwpKqWFgMB345f1C9ATpKndG9KI6P+04XCAcl4Xg/Nzj3NGOpBW0xHIB/jgagjunc9p0D54xu3bJHTHAgUy3ZmhMcMgQvqdsXwqli4lZV5sDfa+oE5aqisCHfVVoR+VJR7MkJDnq+Zn34Dg7q+VYVxGYHVadBSytGaqcKBZn0fQvOFrFuh6zfX4dDYv+eun0hHOoIDdwDqs4ewUEPD52eO82mUwcO4N+6rB7+DDiURMfV87Lehk4rFh/qsB0DaW27awWHRLC5mw8cnKXlhU1pBqoLFOW9O3Bw+pMF73YP5fLXvQMHH32x/Udwqi8L4JCAX6ZuP3Tg7KfhHNPUwxw3FRy42vIaiB4dOGQan/8IDq39qtKMLGtTz3baUJOFoBCGLJcpNrykB0jmJIt83erjZA7OoQuH2PNncAbO+J70typtKJ24tzc0+yz0qhAJ4ibNhTO9eDVLjgeoaODCsby8fw6nYd9Pj38xzlPaGDxaI9HB3J4e7o2+AlyWewPexA+G9lw4j+aXfwzn1upaKTq4aUratm4e8cp90GgzVj3Ec6nTTcURdYXUGIIjuUd7fO2bdrt9c2w6seCoa/4EDuW9Egzbu8qHxnDSqiy+eTi7Ocf4SpUHD7a3B/az9SKpOoSNaT3sfbSgFHLSPDyk4JiA9p/DSQdpug6kepxqf3CYZgjMCKqMdPtpxYKNeASxo0dKw1SKVHHhKOH9EzgWi81DgNLxK/pvu+nLkZcHGg4Z+0cD51kbeFVtSLfepeDoufoDOFXLokjaW/TLuVWmYYgyMNdq4MqplDxDD05akxd3pgwHHTiaPUvDuXH7BdqxRnfgFL/eOoUIdFPTFP5vXaiOBhoOKg9KLC42A10uofolDiaYXTgqA7A0nO1DoFSVyOn7oH3+6+Jgu5q+vr6d/HR83B4c7JjN9MejpO3l5vrZzAr2+5j5tEapcgQfdK3ePo7isFKqwl+d5W1ge7NUUEEFFVRQQQUVVFBBBRX0f0L/A8djJhd9d93+AAAAAElFTkSuQmCC"}
            style={{ width: "250px" }}
          />
          <Card.Body>
            <Card.Title>Gobierno de la provincia de Tucumán</Card.Title>
            <Card.Text>
          
            </Card.Text>
            <a
              href={"https://www.tucuman.gob.ar/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Ir a web</Button>
            </a>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img
            variant="top"
            src={"https://yt3.googleusercontent.com/ytc/APkrFKaxjE_hQpmZaal46y5HzkHmNPZ_hmeIChUtUMf3=s900-c-k-c0x00ffffff-no-rj"}
            style={{ width: "300px", height: "300px"}}
          />
          <Card.Body>
            <Card.Title>Honorable legislatura de la provincia de Tucumán</Card.Title>
            <Card.Text>
            
            </Card.Text>
            <a
              href={"https://legislaturadetucuman.gob.ar/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Ir a web</Button>
            </a>
          </Card.Body>
        </Card>

        
      </div>
      </main>
      <br />
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Sponsors;