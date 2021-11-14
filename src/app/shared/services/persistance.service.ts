import { Injectable } from '@angular/core'

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  get(key: string): any {
    try {
      const storageItem = localStorage.getItem(key)
      return storageItem != null ? JSON.parse(storageItem) : null
    } catch (e) {
      console.error('Error getting data from localStorage', e)
      return null
    }
  }
}
