import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  todoList = []

  today : number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()
  }

  delete(index) {
    this.todoList.splice(index,1)
  }


  ngOnInit() {
   
  }

}
