import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formCadastro!: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.formCadastro = this.fb.group({
      idCliente: [0],
      data: [new Date().toLocaleDateString("pt-br"), Validators.required],
      nome: ["", Validators.required],
      telefone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      cep: ["", [Validators.required]]

    })

  }

  getErros(campo:string){
    return this.formCadastro.get(campo)?.errors && this.formCadastro.get(campo)?.touched ? true:false
  }

  onSubmit() {
    if (this.formCadastro.valid) {
      alert(JSON.stringify(this.formCadastro.value, null, 2))
    }else{
      Swal.fire({
        title:"Atenção",
        icon:"info",
        text:"por favor preencha todos os campos",
        footer:new Date().toLocaleDateString()
      })
    }
  }

}
