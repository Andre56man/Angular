import { Component, HostListener, signal } from '@angular/core';
import { Header } from '../header/header';
import { Preloader } from '../preloader/preloader';
import { Introduction } from './components/introduction/introduction';
import { About } from './components/about/about';
import { Service } from './components/service/service';
import { Portfolio } from './components/portfolio/portfolio';
import { Resume } from './components/resume/resume';
import { Testimonial } from './components/testimonial/testimonial';
import { Blog } from './components/blog/blog';
import { Contact } from './components/contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Preloader,
    Header,
    Introduction,
    About,
    Service,
    Portfolio,
    Resume,
    Testimonial,
    Blog,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  showScrollTop = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop.set(window.scrollY > 400);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
