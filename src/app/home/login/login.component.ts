import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => {this.router.navigate(['animais']),
          console.log('Autenticado com sucesso')},
      error: (error) => {alert('Usuário ou senha inválido'),
          console.log(error)}
    });
    // this.authService.autenticar(this.usuario, this.senha).subscribe(
    //   () => {
    //     this.router.navigate(['animais']);
    //   },
    //   (error) => {
    //     alert('Usuário ou senha inválido');
    //     console.log(error);
    //   }
    // );
    // console.log(this.usuario);
    // console.log(this.senha);
  }
}
