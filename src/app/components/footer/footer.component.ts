import { Component, OnInit } from '@angular/core';
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
faInsta = faInstagramSquare;
faTwitter = faTwitter;
faLinkedin = faLinkedinIn;
faFacebook = faFacebookF;
  constructor() { }

  ngOnInit(): void {
  }

}
